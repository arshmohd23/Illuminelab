import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDnTxcbsrh1qiRJA84BacxCy-5ZSxM3IKs",
    authDomain: "table-fe7bb.firebaseapp.com",
    projectId: "table-fe7bb",
    databaseURL: "https://table-fe7bb-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "table-fe7bb.appspot.com",
    messagingSenderId: "313179799173",
    appId: "1:313179799173:web:1dd9d2f86c3d3b32ad73ec"
};
firebase.initializeApp(firebaseConfig)

export default firebase;
