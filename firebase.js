import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBxNME1UEnLOLdj9Nf9Hq6OBg5n3cueTPg",
    authDomain: "task-91d4d.firebaseapp.com",
    projectId: "task-91d4d",
    storageBucket: "task-91d4d.appspot.com",
    messagingSenderId: "870600146369",
    appId: "1:870600146369:web:37b263a0dd4e04c6f80340",
    measurementId: "G-3BYB18F2B8"
  };
  

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage };
