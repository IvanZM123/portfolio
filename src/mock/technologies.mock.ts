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
    picture: "angular-icon.svg",
  },
  {
    id: 2,
    name: "Vue.js",
    description:
      "It is a framework for modern web application design of a single page application.",
    color: "green-aqua",
    picture: "vue-icon.webp",
  },
  {
    id: 3,
    name: "Node.js",
    description:
      "It is an environment to develop server applications with Javascript",
    color: "green-light",
    picture: "node-icon.webp",
  },
  {
    id: 4,
    name: "Typescript",
    description:
      "Programming language that adds typing to Javascript, among other features.",
    color: "blue",
    picture: "ts-icon.png",
  },
  {
    id: 5,
    name: "Firebase",
    description:
      "It is a platform for web application development and mobile development by Google.",
    color: "yellow",
    picture: "firebase-icon.png",
  },
  {
    id: 6,
    name: "Docker",
    description:
      "Software that allows the packaging of the entire application in containers.",
    color: "blue",
    picture: "docker-icon.png",
  },
  {
    id: 7,
    name: "Bootstrap",
    description: "It is a library dedicated to styling web pages.",
    color: "purple",
    picture: "bootstrap-icon.png",
  },
  {
    id: 8,
    name: "Angular Material",
    description:
      "Is a web component library with a Material design design, a style guide created by Google",
    color: "yellow",
    picture: "angular-material-icon.svg",
  },
  {
    id: 9,
    name: "MongoDB",
    description:
      "Is a document database that offers great scalability and flexibility.",
    color: "green-light",
    picture: "mongodb-icon.png",
  },
  {
    id: 10,
    name: "Webpack",
    description: "Webpack is defined as a module packer",
    color: "ocean",
    picture: "webpack-icon.png",
  },
  {
    id: 11,
    name: "SocketIO",
    description:
      "It is a library that will help us build applications with a persistent connection between client and server",
    color: "darken",
    picture: "socket-io-icon.svg",
  },
  {
    id: 12,
    name: "Vuetify",
    description:
      "Is a Vue UI Library with beautifully handcrafted Material Components",
    color: "ocean",
    picture: "vuetify-icon.png",
  },
  {
    id: 13,
    name: "OpenWeather",
    description: "A scientific yet simple approach to weather forecast.",
    color: "yellow",
    picture: "open-weather-icon.png",
  },
];
