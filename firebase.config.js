import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBLuana_Ga9jLkKIrkT46EO4jOI_df4JIs",
    authDomain: "food-app-a4499.firebaseapp.com",
    databaseURL: "https://food-app-a4499-default-rtdb.firebaseio.com",
    projectId: "food-app-a4499",
    storageBucket: "food-app-a4499.appspot.com",
    messagingSenderId: "234654926379",
    appId: "1:234654926379:web:439aae1ed6e4b028c00c6e"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage  = getStorage(app);

  export { app, firestore, storage};