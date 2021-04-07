import firebase from "firebase"

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAzR4iS97m7slTfG4XDt1cailSmFEHZXIw",
    authDomain: "fb-messenger-clone-b053c.firebaseapp.com",
    projectId: "fb-messenger-clone-b053c",
    storageBucket: "fb-messenger-clone-b053c.appspot.com",
    messagingSenderId: "578595582093",
    appId: "1:578595582093:web:e136b4f1ab1841c54db2c4",
    measurementId: "G-VVN4L45XZV"
  });

    const db= firebaseApp.firestore()

    export default db;