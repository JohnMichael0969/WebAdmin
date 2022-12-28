import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAXxg0shv7zheBNvBIBZAep70ifJC3hcVE",
    authDomain: "dbadminweb.firebaseapp.com",
    databaseURL: "https://dbadminweb-default-rtdb.firebaseio.com",
    projectId: "dbadminweb",
    storageBucket: "dbadminweb.appspot.com",
    messagingSenderId: "72331695996",
    measurementId: "G-TF6B7YY14L"
  })
}

export const db = firebase.firestore()
