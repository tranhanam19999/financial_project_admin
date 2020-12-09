import firebase from 'firebase/app'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBICSDXcjC2PmIV8ol_bGybzMRy9TuzrLw",
    authDomain: "notifykhtn.firebaseapp.com",
    databaseURL: "https://notifykhtn.firebaseio.com",
    projectId: "notifykhtn",
    storageBucket: "notifykhtn.appspot.com",
    messagingSenderId: "351701477317",
    appId: "1:351701477317:web:cd2aba311c203192008dac"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()
export {storage, firebase as default }