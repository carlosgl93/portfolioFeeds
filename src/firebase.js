import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCtC6WK0Gi5w6Qc_KN3HDArzEffjMAmOi0",
    authDomain: "my-portfolio-ac080.firebaseapp.com",
    databaseURL: "https://my-portfolio-ac080.firebaseio.com",
    projectId: "my-portfolio-ac080",
    storageBucket: "my-portfolio-ac080.appspot.com",
    messagingSenderId: "210310219560",
    appId: "1:210310219560:web:4051214dbfe767b302f21d",
    measurementId: "G-W72WS55J3X"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const gprovider = new firebase.auth.GoogleAuthProvider();

export { auth, gprovider};
export default db;