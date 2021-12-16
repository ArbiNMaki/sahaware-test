import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAICTXoRwhS-qovK-gNpw_2y2QxiLgP3DY',
  authDomain: 'fireblogs-91642.firebaseapp.com',
  projectId: 'fireblogs-91642',
  storageBucket: 'fireblogs-91642.appspot.com',
  messagingSenderId: '648380188263',
  appId: '1:648380188263:web:91a9f817464aa9120ab6c2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
