import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
   apiKey: "AIzaSyBoZeeSv3Camp0muYGgWFj0nOAxrEo-eew",
   authDomain: "shomindb.firebaseapp.com",
   projectId: "shomindb",
   storageBucket: "shomindb.appspot.com",
   messagingSenderId: "810324480059",
   appId: "1:810324480059:web:748d117add4eba3ef44c1e",
   measurementId: "G-GKH9HTPR5H",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// creating new user 
export const createUserProfileDocument = async (userAuth, otherData) => {
   if (!userAuth) return;
   const userRef = firestore.doc(`/users/${userAuth.uid}`);
   const snapshot = await userRef.get();

   if (!snapshot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...otherData,
         });
      } catch (error) {
         console.log("Problem storing user", error.message);
      }
   }

   return userRef;
};

// for adding collections to the firestore
export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  // creating batch object
  const batch = firestore.batch()

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  // committing batch update
  return await batch.commit()
}

export const convertCollectionSnapshotToMap = (collections) => {
   const transformedCollection = collections.docs.map((doc) => {
      const { items, title } = doc.data();
      return {
         items,
         title,
         routeName: encodeURI(title.toLowerCase()),
         id: doc.id
      }
   })

   return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
   }, {});
}

export const getCurrentUser = () => {
   return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
         unsubscribe()
         resolve(userAuth)
      }, reject)
   })
}

// setting google sign up provider
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// exporting firebse for further use
export default firebase;
