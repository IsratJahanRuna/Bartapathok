import firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBV3ShzU5PxYHtdrEZSGCe5IXOSl-fx0og",
    authDomain: "barta-pathok.firebaseapp.com",
    projectId: "barta-pathok",
    storageBucket: "barta-pathok.appspot.com",
    messagingSenderId: "500272577641",
    appId: "1:500272577641:web:538545d8806f969026b6f8"
  };

let app;

if(firebase.apps.length === 0)
{
   app= firebase.initializeApp(firebaseConfig);
}
else{
    app=firebase.app();
}

const db=app.firestore();
const auth=firebase.auth();

export {db,auth};