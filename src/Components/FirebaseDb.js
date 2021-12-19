import firebase from 'firebase'
const firebaseApp = firebase.intializeApp({
    apiKey: "AIzaSyC3kUAqtcSBEo1FNFmkCnZ18FKe9LUMKWs",
    authDomain: "react-pwa-a7c25.firebaseapp.com",
    projectId: "react-pwa-a7c25",
    storageBucket: "react-pwa-a7c25.appspot.com",
    messagingSenderId: "265719252061",
    appId: "1:265719252061:web:b92d0b35ce733cdea679b4",
    measurementId: "G-YMJJN8TW0J"  
})

const db = firebase.firestore()
const auth = firebase.auth()

export {db , auth}