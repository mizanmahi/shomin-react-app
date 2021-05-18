import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const  config = {
    apiKey: "AIzaSyBoZeeSv3Camp0muYGgWFj0nOAxrEo-eew",
    authDomain: "shomindb.firebaseapp.com",
    projectId: "shomindb",
    storageBucket: "shomindb.appspot.com",
    messagingSenderId: "810324480059",
    appId: "1:810324480059:web:748d117add4eba3ef44c1e",
    measurementId: "G-GKH9HTPR5H"
  };

  export const createUserProfileDocument = async (userAuth, otherData) => {
     if(!userAuth) return;
     const userRef = firestore.doc(`/users/${ userAuth.uid}`);
     const snapshot = await userRef.get();
     
     if(!snapshot.exists){
       const { displayName, email } = userAuth;
       const createdAt = new Date();

       try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...otherData
        })

       }catch(error){
         console.log('Problem storing user', error.message);
       }
     }

     return userRef;
  }

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;