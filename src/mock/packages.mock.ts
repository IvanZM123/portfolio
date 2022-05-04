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
    description:
      "Angular package, which allows you to enter and download digital signatures in diferents formats.",
    badge: "angular-icon.svg",
    githubUrl: "https://github.com/thebug404/ng-digital-signature",
    color: "danger",
    banner:
      "https://user-images.githubusercontent.com/64434514/139567442-7fb36b0f-8580-4768-8c6c-7cdcd45a8158.png",
  },
  {
    id: 2,
    title: "filesrocket",
    description:
      "Filesrocket is an package of Node.js that allows you to manage your files with any cloud storage service.",
    badge: "filesrocket.png",
    githubUrl: "https://github.com/thebug404/ng-digital-signature",
    color: "grey",
    banner:
      "https://user-images.githubusercontent.com/64434514/148323581-1afc535f-fb2b-4e81-808a-19afe5b4c7c9.png",
  },
];
