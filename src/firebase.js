import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDPsrxfARN4zBi2zkolqdAlm7NSa9obWR0",
    authDomain: "auth-lesson-devel.firebaseapp.com",
    projectId: "auth-lesson-devel",
    storageBucket: "auth-lesson-devel.appspot.com",
    messagingSenderId: "605566380064",
    appId: "1:605566380064:web:76e36c3f36b8013facf445"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default app 






