export interface Technology {
  id: number;
  name: string;
  description: string;
  color: string;
  picture: string;
}

export const technologies: Technology[] = [
  {
    id: 1,
    name: "Angular",
    description:
      "It is a framework for modern web application design of a single page application.",
    color: "red",
    picture:
      "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png",
  },
  {
    id: 2,
    name: "Vue.js",
    description:
      "It is a framework for modern web application design of a single page application.",
    color: "green-aqua",
    picture: "https://cdn.iconscout.com/icon/free/png-256/vue-282497.png",
  },
  {
    id: 3,
    name: "Node.js",
    description:
      "It is an environment to develop server applications with Javascript",
    color: "green-light",
    picture:
      "https://cdn.iconscout.com/icon/free/png-256/node-js-1-1174935.png",
  },
  {
    id: 4,
    name: "Typescript",
    description:
      "Programming language that adds typing to Javascript, among other features.",
    color: "blue",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/600px-Typescript_logo_2020.svg.png",
  },
  {
    id: 5,
    name: "Firebase",
    description:
      "It is a platform for web application development and mobile development by Google.",
    color: "yellow",
    picture:
      "https://4.bp.blogspot.com/-rtNRVM3aIvI/XJX_U07Z-II/AAAAAAAAJXY/YpdOo490FTgdKOxM4qDG-2-EzcNFAWkKACK4BGAYYCw/s1600/logo%2Bfirebase%2Bicon.png",
  },
  {
    id: 6,
    name: "Docker",
    description:
      "Software that allows the packaging of the entire application in containers.",
    color: "blue",
    picture:
      "https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png",
  },
];
