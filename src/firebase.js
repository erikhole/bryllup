import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD1rPHVBBjcRzLAbCOaZp6P2yyYwsSwVIM',
  authDomain: 'bryllup-10466.firebaseapp.com',
  projectId: 'bryllup-10466',
  storageBucket: 'bryllup-10466.appspot.com',
  messagingSenderId: '574777653334',
  appId: '1:574777653334:web:73d588a765bb93b9d3a3f7',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp; // Exporting the timestamp function
export default firebase;