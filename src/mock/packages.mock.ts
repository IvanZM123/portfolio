export interface Package {
  id: number;
  title: string;
  description: string;
  badge: string;
  githubUrl: string;
  color: string;
  banner: string;
}

export const packages: Package[] = [
  {
    id: 1,
    title: "ngx-digital-signature",
    description: "Angular package, which allows you to enter and download digital signatures in diferents formats. For example jpg, png, jpeg, svg and more",
    badge: "angular-icon.svg",
    githubUrl: "https://github.com/IvanZM123/ng-digital-signature",
    color: "danger",
    banner: "https://user-images.githubusercontent.com/64434514/139567442-7fb36b0f-8580-4768-8c6c-7cdcd45a8158.png",
  },
]
