import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// const firebaseApp = initializeApp({
//     apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

// export const auth = getAuth(firebaseApp);

const firebaseConfig = {
    apiKey: "AIzaSyDPsrxfARN4zBi2zkolqdAlm7NSa9obWR0",
    authDomain: "auth-lesson-devel.firebaseapp.com",
    projectId: "auth-lesson-devel",
    storageBucket: "auth-lesson-devel.appspot.com",
    messagingSenderId: "605566380064",
    appId: "1:605566380064:web:76e36c3f36b8013facf445"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)

  export default app 






