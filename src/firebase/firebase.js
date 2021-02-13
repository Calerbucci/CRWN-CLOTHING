import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBtdiLy_2Juxgro8ezUgr2EFYNWPextpJc",
    authDomain: "crwn-db-d33b7.firebaseapp.com",
    projectId: "crwn-db-d33b7",
    storageBucket: "crwn-db-d33b7.appspot.com",
    messagingSenderId: "411846519641",
    appId: "1:411846519641:web:3a773b1430f8a90277fa48",
    measurementId: "G-61P8E4PY2N"
  };

  export const createUserProfileDocument = async (userAuth, addiData) => {
        if(!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();

        if(!snapShot.exists){
            const { displayName, email} = userAuth;
            const createdAt = new Date();

            try
            {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...addiData
                })
            }
            catch (error)
            {
                console.log('error creating user', error.message);
            }
        }
        return userRef;

  }


 export const convertCollectionSnapshotToMap = (collections) => {
      const transformedCollection = collections.docs.map(doc => {
          const {title, items} = doc.data();

          return {
              routeName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title: title,
              items: items
          };
      });

        return  transformedCollection.reduce((accumulator, collection) => {
          accumulator[collection.title.toLowerCase()]= collection;
          return accumulator;
      }, {});
     
  }


  firebase.initializeApp(config);

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);

      const batch = firestore.batch();

      objectsToAdd.forEach(obj => {
          const newDocRef = collectionRef.doc();
          batch.set (newDocRef, obj);
      });

      return await batch.commit();
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInwithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
