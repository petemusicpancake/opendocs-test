import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const fbConfig = {
    apiKey: "AIzaSyACjzNwrfWEn6DZk978SkgTWBv6AaJhoq4",
    authDomain: "frontend-test-c3571.firebaseapp.com",
    projectId: "frontend-test-c3571",
    storageBucket: "frontend-test-c3571.appspot.com",
    messagingSenderId: "130803512597",
    appId: "1:130803512597:web:a5ac83ddae74f4123aa51c"
};

firebase.initializeApp(fbConfig)

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    enableLogging: true
}



export { fbConfig, rrfConfig }