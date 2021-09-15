export interface Article {
  id: number;
  title: string;
  subtitle: string;
  picture: string;
  url: string;
  date: string;
  tags: Array<string>;
}

export const articles: Array<Article> = [
  {
    id: 1,
    title: "How to setup email verification in Feathers.js",
    subtitle:
      "Surely you want to send a verification email to the user when they have registered in your app.",
    picture:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--Z2jDyXvw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3tavsbki7n7etzlgjn7h.png",
    url: "https://dev.to/ivanz123/how-to-setup-email-verification-in-feather-js-and-node-js-4had",
    tags: ["Feathers.js", "Node.js", "Typescript"],
    date: "9 Sep 2021",
  },
  {
    id: 2,
    title: "How to setup email verification in Feathers.js - Vue.js",
    subtitle:
      "This is the second part of How to setup email verification in Feathers.js",
    picture:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--RSMvwHxC--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s1x6u5xuigl873g8wp9z.png",
    url: "https://dev.to/ivanz123/how-to-setup-email-verification-in-feathers-js-frontend-using-vue-js-4n9c",
    tags: ["Feathers.js", "Node.js", "Typescript", "Vue.js"],
    date: "2 Sep 2021",
  },
  {
    id: 3,
    title: "How to setup email verification in Feathers.js - Angular",
    subtitle:
      "This is the second part of How to setup email verification in Feathers.js",
    picture:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--UXaIWvZx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fj6btjdfhfzs7ml7o6if.png",
    url: "https://dev.to/ivanz123/how-to-setup-email-verification-in-feathers-js-frontend-using-vue-js-4n9c",
    tags: ["Angular", "Feathers.js", "Node.js", "Typescript"],
    date: "9 Sep 2021",
  },
];
