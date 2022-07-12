import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCbCDsHLbxY89tHqqdDfite3R7e_YwZj0o",
    authDomain: "sg-booths.firebaseapp.com",
    projectId: "sg-booths",
    storageBucket: "sg-booths.appspot.com",
    messagingSenderId: "1041738832688",
    appId: "1:1041738832688:web:ebf2d0195264b3026586f5",
    measurementId: "G-91D7EKPL9K"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };