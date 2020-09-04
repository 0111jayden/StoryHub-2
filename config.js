import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCE6EOABqBoeKrF4ATSFMlC-LouWu0sJZA",
    authDomain: "wily-b3dee.firebaseapp.com",
    databaseURL: "https://wily-b3dee.firebaseio.com",
    projectId: "wily-b3dee",
    storageBucket: "wily-b3dee.appspot.com",
    messagingSenderId: "60816371351",
    appId: "1:60816371351:web:8c497e8997bfae1820c3d2"
  };
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();