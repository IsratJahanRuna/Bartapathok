import firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCIrmgxrxmJvo_mG1KYqXzCnQu16rxGz_0",
  authDomain: "barta-pathok-e36f6.firebaseapp.com",
  projectId: "barta-pathok-e36f6",
  storageBucket: "barta-pathok-e36f6.appspot.com",
  messagingSenderId: "159517111049",
  appId: "1:159517111049:web:87331f48355f1c43dad9d8"
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