// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDxLGPSrWF9HnNNCaCb-neji4tbJen9-34",
  authDomain: "whatsapp-clone-9e89b.firebaseapp.com",
  projectId: "whatsapp-clone-9e89b",
  storageBucket: "whatsapp-clone-9e89b.appspot.com",
  messagingSenderId: "938900292547",
  appId: "1:938900292547:web:b01f855839e268a7447376",
  measurementId: "G-NVC8SCSVQE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth= firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db; 