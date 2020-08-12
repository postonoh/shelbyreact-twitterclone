import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBBRrtpePhaxqzrr3iHtU-gy2tOng4f18c",
    authDomain: "shelbytwitter-clone.firebaseapp.com",
    databaseURL: "https://shelbytwitter-clone.firebaseio.com",
    projectId: "shelbytwitter-clone",
    storageBucket: "shelbytwitter-clone.appspot.com",
    messagingSenderId: "107852987504",
    appId: "1:107852987504:web:5aee907e673422019e08b5"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
export default db;