import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_ae_jVNmSl8wWLyBVC6Ww1KBWiGwRoMU",
    authDomain: "todo-app-8f219.firebaseapp.com",
    projectId: "todo-app-8f219",
    storageBucket: "todo-app-8f219.appspot.com",
    messagingSenderId: "159016759212",
    appId: "1:159016759212:web:58d4ede011b708e5429409",
    measurementId: "G-0F51FXT5F7"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099')
if(window.location.hostname === 'localhost'){
    db.useEmulator('localhost', "8080");
}


export { auth, db }
export default firebase;