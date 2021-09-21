export function filterEntities<T extends { id: number }>(
  entities: T[],
  params: number[]
): T[] {
  return params
    .map((param) => entities.find((entity) => entity.id === param))
    .filter((i) => !!i) as T[];
}
