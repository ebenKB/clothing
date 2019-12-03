import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCLqkTzGSostoAJ5brG54kRl8XWGRKTfN0",
    authDomain: "ecommerce-117ff.firebaseapp.com",
    databaseURL: "https://ecommerce-117ff.firebaseio.com",
    projectId: "ecommerce-117ff",
    storageBucket: "ecommerce-117ff.appspot.com",
    messagingSenderId: "399006698227",
    appId: "1:399006698227:web:c076a73da7396c013a0586",
    measurementId: "G-6K4TWVMY6P"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;