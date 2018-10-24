import firebase from 'firebase';

const config = {
    apiKey: "Hottentotterstottertrottelmutterlattengitterkotterbeutelrattenattentater",
    authDomain: "qiwi-9050d.firebaseapp.com",
    databaseURL: "https://qiwi-9050d.firebaseio.com",
    projectId: "qiwi-9050d",
    storageBucket: "qiwi-9050d.appspot.com",
    messagingSenderId: "526220851436"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
export const FDatabase = firebase.database();
