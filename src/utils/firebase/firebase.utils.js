import { initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,

} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query, 
    getDocs,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDgHTVmF8lf5_aLCnn2Ab-7mIWb1BXgHkY",
    authDomain: "crwn-clothing-db-5c9ab.firebaseapp.com",
    projectId: "crwn-clothing-db-5c9ab",
    storageBucket: "crwn-clothing-db-5c9ab.appspot.com",
    messagingSenderId: "875850831602",
    appId: "1:875850831602:web:cdcf15c64290825c12a26b"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.getCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
    const batch = writeBatch(db);
    const collectionRef = collection(db, collectionKey);

    objectsToAdd.forEach( async (object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase())
      batch.set(docRef, object)
    });

    await batch.commit();
    console.log('done')
  }

  export const getCategoresAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q);
    const catergoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const {title, items} = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})

    return catergoryMap;
  }

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

  export const signOutUser = async () => signOut(auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)