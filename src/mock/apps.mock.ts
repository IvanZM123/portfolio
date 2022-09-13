import { filterEntities } from "@/utils/helpers";
import { technologies, Technology } from "./technologies.mock";

export interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

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
  technologies: Array<Technology>;
  features: Feature[];
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
      "Vuochat is an instant messaging web application. It is developed in Node.js and Typescript. It incorporates authentication through social networks using Passport.js, and real-time communication is possible thanks to Socket.io",
    picture:
      "https://res.cloudinary.com/dlkfpx8lb/image/upload/v1663095946/Portfolio/vuochat_mqwmsd.png",
    images: [],
    videos: [],
    githubUrl: "https://github.com/IvanZM123/vuochat",
    demoUrl: "https://vuochat.herokuapp.com",
    features: [
      {
        title: "Real-Time",
        description: "More connected than ever, allows instant changes.",
        icon: "stopwatch",
        color: "yellow",
      },
      {
        title: "Progresive Web Apps",
        description: "Show notifications, offline use and more...",
        icon: "trending-up",
        color: "primary",
      },
      {
        title: "Authentication OAuth",
        description: "Authentication through social networks and natively.",
        icon: "check-shield",
        color: "green-light",
      },
      {
        title: "Back-Up",
        description: "Provide backup of all your conversations.",
        icon: "memory-card",
        color: "brown",
      },
    ],
    technologies: filterEntities(technologies, [3, 4, 9, 10, 11, 7]),
    color: "ocean",
    slug: "vuochat",
  },
  // {
  //   id: 2,
  //   title: "VuoCommerce",
  //   subtitle: "Ecommerce",
  //   description:
  //     "It is an application with Real Time Communication, it is developed with Node.js, Feathers.js, Vue.js and other additional technologies. If you want to know how it works",
  //   picture:
  //     "https://res.cloudinary.com/dlkfpx8lb/image/upload/v1625388981/App_banners/products-page_jgjjzt.png",
  //   images: [],
  //   videos: [],
  //   githubUrl: "https://github.com/IvanZM123/ecommerce",
  //   demoUrl: "https://vuejscommerce.herokuapp.com",
  //   technologies: filterEntities(technologies, [2, 3, 4, 11, 12]),
  //   features: [
  //     {
  //       title: "Real-Time",
  //       description: "More connected than ever, allows instant changes.",
  //       icon: "stopwatch",
  //       color: "yellow",
  //     },
  //     {
  //       title: "Authentication",
  //       description: "User authentication is done through JWT.",
  //       icon: "check-shield",
  //       color: "green-light",
  //     },
  //     {
  //       title: "Management Roles",
  //       description: "Role management is allowed, so you have full control.",
  //       icon: "group",
  //       color: "danger",
  //     },
  //   ],
  //   color: "darken",
  //   slug: "vuocommerce",
  // },
  {
    id: 3,
    title: "NgBusiness",
    subtitle: "Ecommerce",
    description:
      "A web application developed with Node.js and Angular, which simulates the behavior of an ecommerce.",
    picture:
      "https://res.cloudinary.com/dlkfpx8lb/image/upload/v1663096213/Portfolio/ngbusiness_gzkxu0.png",
    images: [
      "https://res.cloudinary.com/dlkfpx8lb/image/upload/v1632641411/App_banners/dashboard_ljbdio.png",
      "https://res.cloudinary.com/dlkfpx8lb/image/upload/v1632641411/App_banners/products_drsysl.png",
      "https://res.cloudinary.com/dlkfpx8lb/image/upload/v1632641411/App_banners/orders_iu95bv.png",
      "https://res.cloudinary.com/dlkfpx8lb/image/upload/v1632641411/App_banners/customers_sl33ei.png",
    ],
    videos: [],
    githubUrl: "https://github.com/IvanZM123/ngbusiness",
    demoUrl: "https://ngbusiness.netlify.app",
    technologies: filterEntities(technologies, [1, 4, 8, 7]),
    features: [],
    color: "purple",
    slug: "ngbusiness",
  },
  {
    id: 4,
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
    technologies: filterEntities(technologies, [2, 4, 13]),
    features: [
      {
        title: "Geolocation",
        description: "Get your location for a more detailed forecast.",
        icon: "world",
        color: "green-aqua",
      },
      {
        title: "Weekly forecats",
        description: "View the forecast up to 7 days in advance.",
        icon: "cloud-light-rain",
        color: "primary",
      },
      {
        title: "Single Page App",
        description: "Use it as if it were installed on your device.",
        icon: "note",
        color: "purple",
      },
    ],
    color: "brown",
    slug: "kampweather",
  },
];
