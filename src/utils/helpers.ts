export function filterEntities<T extends { id: number }>(
  entities: T[],
  params: number[]
): T[] {
  return params
    .map((param) => entities.find((entity) => entity.id === param))
    .filter((i) => !!i) as T[];
}

export type TypeSort = "ASC" | "DESC";

function getTime(a: string, b: string) {
  const first = new Date(a).getTime();
  const second = new Date(b).getTime();
  return { first, second };
}

function sortAsc<T, K extends keyof T>(key: K) {
  return (a: T, b: T) => {
    const { first, second } = getTime(a[key] as any, b[key] as any);
    return first - second;
  }
}

function sortDesc<T, K extends keyof T>(key: K) {
  return (a: T, b: T) => {
    const { first, second } = getTime(a[key] as any, b[key] as any);
    return second - first;
  }
}

const sortOptions = {
  ASC: sortAsc,
  DESC: sortDesc
}

export function sortItems<T, K extends keyof T>(
  items: T[],
  property: K,
  type: TypeSort
) {
  return items.sort(sortOptions[type](property));
}
