import firebase from "firebase/app";
import "firebase/firestore";

import { environments } from "./environments";

firebase.initializeApp(environments.firebaseConfig);

export const firestore = firebase.firestore();
