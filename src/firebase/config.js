import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyApTdea9zPEhbgdDTRwPdrhfdFtUyOZN4I",
    authDomain: "react-project-cd973.firebaseapp.com",
    projectId: "react-project-cd973",
    storageBucket: "react-project-cd973.appspot.com",
    messagingSenderId: "218501287920",
    appId: "1:218501287920:web:fe2d631a651484e0759735"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.FieldValue.serverTimestamp



export { projectFirestore, projectAuth, timestamp }

