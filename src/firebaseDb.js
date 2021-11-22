import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBNksxxBkCw92PMHfgA5eyVO9Hb9zRYeYU",
    authDomain: "projectvue-74d2a.firebaseapp.com",
    projectId: "projectvue-74d2a",
    storageBucket: "projectvue-74d2a.appspot.com",
    messagingSenderId: "1010395655189",
    appId: "1:1010395655189:web:83171fbaf91e5f7c57b21c",
    measurementId: "G-KGTT1FXYT2"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();