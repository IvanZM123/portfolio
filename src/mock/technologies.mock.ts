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
];
