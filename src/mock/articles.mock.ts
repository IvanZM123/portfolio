export interface Article {
  id: number;
  title: string;
  subtitle: string;
  picture: string;
  url: string;
  date: string;
  tags: Array<string>;
  color: string;
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
    date: "2 Sep 2021",
    color: "blue",
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
    date: "9 Sep 2021",
    color: "green-aqua",
  },
  {
    id: 3,
    title: "Say goodbye Trycatch Hell.",
    subtitle:
      "Hi everyone! It is possible that it is here for the post title, and I daresay you have had problems handling",
    picture:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--ZKqs3ZOy--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nd5l81zrjkt4g04kwe1y.png",
    url: "https://dev.to/ivanz123/say-goodbye-trycatch-hell-336o",
    tags: ["Programming", "Productive", "Typescript"],
    date: "18 Sep 2021",
    color: "blue-darken",
  },
  {
    id: 4,
    title: "Building ToDo in Real-Time",
    subtitle:
      "I want to start with a question Have you ever wondered how applications...",
    picture:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--r8Tb_zBo--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pz0fu8sdq4iqtj0o7y5a.png",
    url: "https://dev.to/ivanz123/building-todo-in-real-time-3pbl",
    tags: ["Feathers.js", "Node.js", "Typescript"],
    date: "27 Sep 2021",
    color: "darken",
  },
  {
    id: 5,
    title: "Resources that every developer should know",
    subtitle:
      "Hi guys! I have created this publication, because I wanted to share some tools...",
    picture:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--oPVFlPvq--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fzya5c7inkadw9zeec5g.png",
    url: "https://dev.to/ivanz123/resources-that-every-developer-should-know-3jkd",
    tags: ["Productivity", "Programming", "Tooling", "Webdev"],
    date: "3 Oct 2021",
    color: "purple-light",
  },
  {
    id: 6,
    title: "Learn to use Decorators once and for all",
    subtitle:
      "Hi Developers! How are you? I hope everyone is well. A few weeks ago I begin...",
    picture:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--vKC8qPJc--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/au6sgpa6mvigyp4xdd8d.png",
    url: "https://dev.to/ivanz123/learn-to-use-decorators-once-and-for-all-4l0o",
    tags: ["Typescript", "Tutorial", "Programming"],
    date: "12 Oct 2021",
    color: "blue",
  },
  {
    id: 6,
    title: "Stop using Javascript",
    subtitle:
      "Hello dear friend. I know that the publication has been entered by title.",
    picture:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--V_6EEUc_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f48kxcc4ygarz1td2b1a.png",
    url: "https://dev.to/ivanz123/stop-using-javascript-1m1f",
    tags: ["Discuss", "Javascript", "Typescript", "Tutorial", "Webdev"],
    date: "23 Oct 2021",
    color: "darken",
  },
  {
    id: 7,
    title: "Learn to test your packages NPM locally",
    subtitle:
      "Hi guys! In this post we are going to learn how to test the NPM package before.",
    picture:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--v2Eh7MED--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1i7wu5tvwz3okueykkdq.png",
    url: "https://dev.to/ivanz123/learn-to-test-your-packages-npm-locally-523a",
    tags: ["npm", "tutorial", "beginners", "opensource"],
    date: "11 Nov 2021",
    color: "brown",
  },
  {
    id: 8,
    title: "Upload Files with any Cloud Service",
    subtitle:
      "Hi developers! After months of not posting anything, here I am again",
    picture:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--O2akpx8P--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t04i49ak6085ir7wgh9f.png",
    url: "https://dev.to/ivanzm123/manage-your-files-with-any-cloud-service-with-just-10-lines-of-code-329c",
    tags: ["opensoure", "javascript", "webdev"],
    date: "4 Apr 2022",
    color: "danger",
  },
  {
    id: 9,
    title: "Integrating an ORM in Node.js in 5 easy steps",
    subtitle:
      "In this post we are going to implement an ORM (TypeORM) to interact with the Database (MySQL)",
    picture:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--nszVr6lw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0dds0ha43nyg5r0vapzo.png",
    url: "https://dev.to/ivanzm123/integrating-an-orm-in-nodejs-in-5-easy-steps-d4a",
    tags: ["javascript", "beginners", "programming", "node"],
    date: "11 Apr 2022",
    color: "grey",
  },
  {
    id: 10,
    title: "Upload Files to Cloudinary with Node.js",
    subtitle:
      "Today I bring you a package that allows you to upload, list and delete files with various cloud services Cloudinary, Amazon S3",
    picture:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--XZdWEXxq--/c_imagga_scale,f_auto,fl_progressive,h_420,q_66,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s7u18xzt1aulfhhwqv6s.gif",
    url: "https://dev.to/ivanzm123/upload-files-to-cloudinary-with-nodejs-in-1-minute-3ll",
    tags: ["javascript", "tutorial", "webdev", "node"],
    date: "18 Apr 2022",
    color: "danger",
  },
  {
    id: 11,
    title: "Build Querystring like a pro",
    subtitle:
      "Often in apps, you will have to interact with the URL to implement some functionality like pagination.",
    picture:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--zMDTnCRy--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/05grq5heqlhen0vs6mrt.png",
    url: "https://dev.to/ivanzm123/build-querystring-like-a-pro-35il",
    tags: ["javascript", "node", "webdev", "programming"],
    date: "26 Apr 2022",
    color: "darken",
  },
];
