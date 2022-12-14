import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"

import AbstractServiceProvider from './AbstractServiceProvider'
import FirebaseAuthService from "./FirebaseAuthService"

const firebaseConfig = {
    "apiKey": "AIzaSyBMyjMaCx6XzQG5WBIkeYpzXvJp0_UXyyk",
    "authDomain": "phonebook-2213e.firebaseapp.com",
    "databaseURL": "https://phonebook-2213e-default-rtdb.europe-west1.firebasedatabase.app",
    "projectId": "phonebook-2213e",
    "storageBucket": "phonebook-2213e.appspot.com",
    "messagingSenderId": "850097043875",
    "appId": "1:850097043875:web:0e02480ecd044cd5d68216"
}
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

class FirebaseServiceProvider extends AbstractServiceProvider {
    protected factory(): void {
        this.authService = new FirebaseAuthService(this, auth)
    }
}

export default FirebaseServiceProvider
