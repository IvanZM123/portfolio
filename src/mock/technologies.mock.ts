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
    picture: "https://cdn.worldvectorlogo.com/logos/angular-icon.svg",
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
  {
    id: 7,
    name: "Bootstrap",
    description: "It is a library dedicated to styling web pages.",
    color: "purple",
    picture: "https://i.stack.imgur.com/C9301.png",
  },
  {
    id: 8,
    name: "Angular Material",
    description:
      "Is a web component library with a Material design design, a style guide created by Google",
    color: "yellow",
    picture: "https://material.angular.io/assets/img/angular-material-logo.svg",
  },
  {
    id: 9,
    name: "MongoDB",
    description:
      "Is a document database that offers great scalability and flexibility.",
    color: "green-light",
    picture: "https://img.icons8.com/color/480/mongodb.png",
  },
  {
    id: 10,
    name: "Webpack",
    description: "Webpack is defined as a module packer",
    color: "ocean",
    picture: "https://hsto.org/webt/k-/tm/2g/k-tm2gvbb_ky6gdrd-tzqrzjkf4.png",
  },
  {
    id: 11,
    name: "SocketIO",
    description:
      "It is a library that will help us build applications with a persistent connection between client and server",
    color: "darken",
    picture: "https://cdn.worldvectorlogo.com/logos/socket-io.svg",
  },
  {
    id: 12,
    name: "Vuetify",
    description:
      "Is a Vue UI Library with beautifully handcrafted Material Components",
    color: "ocean",
    picture: "https://iconape.com/wp-content/png_logo_vector/vuetify.png",
  },
  {
    id: 13,
    name: "OpenWeather",
    description: "A scientific yet simple approach to weather forecast.",
    color: "yellow",
    picture:
      "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/icons/logo_60x60.png",
  },
];
