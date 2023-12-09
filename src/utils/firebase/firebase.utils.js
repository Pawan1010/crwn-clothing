import { initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDgHTVmF8lf5_aLCnn2Ab-7mIWb1BXgHkY",
    authDomain: "crwn-clothing-db-5c9ab.firebaseapp.com",
    projectId: "crwn-clothing-db-5c9ab",
    storageBucket: "crwn-clothing-db-5c9ab.appspot.com",
    messagingSenderId: "875850831602",
    appId: "1:875850831602:web:cdcf15c64290825c12a26b"
  };
  
  const firebase = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.getCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additonalInformation={}) => {


    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef)

    if(!userSnapShot.exists()) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc( userDocRef, {
                displayName,
                email,
                createdAt,
                ...additonalInformation,
            });
        } catch (error){
            console.log('error creating user', error.message);
        }
    }

    return userDocRef
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  }


  export const signInAuthWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  }

