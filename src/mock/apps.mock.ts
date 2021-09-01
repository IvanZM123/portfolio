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
  technologies?: Array<Record<string, string>>;
  features: Array<Record<string, string>>;
  [key: string]: any;
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
    technologiesIds: [],
    features: [],
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
    technologiesIds: [],
    features: [],
  },
];
