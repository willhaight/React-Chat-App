import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyACNfeuR7IN_8wJHxD1ZpnvfwIWufu9NVc",
    authDomain: "react-chat-app-49e72.firebaseapp.com",
    projectId: "react-chat-app-49e72",
    storageBucket: "react-chat-app-49e72.appspot.com",
    messagingSenderId: "736284730761",
    appId: "1:736284730761:web:84dc9a0abbe9dbe0556d58"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.FieldValue.serverTimestamp



export { projectFirestore, projectAuth, timestamp }

