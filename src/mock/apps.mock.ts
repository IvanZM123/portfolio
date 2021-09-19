import { Technology } from "./technologies.mock";

export interface App {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  picture: string;
  githubUrl: string;
  demoUrl: string;
  images: Array<string>;
  videos: Array<string>;
  technologiesIds: Array<number>;
  technologies?: Array<Technology>;
  features: Array<Record<string, string>>;
  color: string;
  slug: string;
  [key: string]: unknown;
}

export const apps: Array<App> = [
  {
    id: 1,
    title: "Vuochat",
    subtitle: "Instant Messaging",
    description:
      "Vuochat is an instant messaging web application. It is developed in Node.js and Typescript. It incorporates authentication through social networks using Passport.js, and real-time communication is possible thanks to Socket.io, conversations are stored in MongoDB. It also uses PWA as the installation of the Application and Push notifications. If you want to know how it works, click here: Vuochat or on the image.",
    picture:
      "https://res.cloudinary.com/dlkfpx8lb/image/upload/v1612023023/App_banners/vuochat_users_q6v2tu.png",
    images: [],
    videos: [],
    githubUrl: "https://github.com/IvanZM123/vuochat",
    demoUrl: "https://vuochat.herokuapp.com",
    technologiesIds: [3, 4],
    features: [],
    color: "ocean",
    slug: "vuochat",
  },
  {
    id: 2,
    title: "VuoCommerce",
    subtitle: "Ecommerce",
    description:
      "It is an application with Real Time Communication, it is developed with Node.js, Feathers.js, Vue.js and other additional technologies. If you want to know how it works",
    picture:
      "https://res.cloudinary.com/dlkfpx8lb/image/upload/v1625388981/App_banners/products-page_jgjjzt.png",
    images: [],
    videos: [],
    githubUrl: "https://github.com/IvanZM123/ecommerce",
    demoUrl: "https://vuejscommerce.herokuapp.com",
    technologiesIds: [2, 3, 4],
    features: [],
    color: "darken",
    slug: "vuocommerce",
  },
  {
    id: 3,
    title: "Kampweather",
    subtitle: "Weather app",
    description:
      "Kampweather is a weather app. It is developed in Vue and the resources obtained come from OpenWeather. Also use the Geolocation to obtain the current climate of my location.",
    picture:
      "https://camo.githubusercontent.com/4b70fc4d59bc3a2a18ba54f8bba25e08cbc332801ee116916f93112205123cbe/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f646c6b667078386c622f696d6167652f75706c6f61642f76313630393936373530322f4170705f62616e6e6572732f6b616d70776561746865725f766e737274692e706e67",
    images: [],
    videos: [],
    githubUrl: "https://github.com/IvanZM123/kampweather",
    demoUrl: "https://kampweather.web.app",
    technologiesIds: [2, 3, 4],
    features: [],
    color: "brown",
    slug: "kampweather",
  },
];
