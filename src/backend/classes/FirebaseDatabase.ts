import '../aliases'
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase-admin/auth";
import {getFirestore} from "firebase/firestore";
import * as firebaseAdmin from 'firebase-admin';

import AbstractDatabase from './AbstractDatabase'
import FirebaseAuthService from './FirebaseAuthService'
import FirebaseUserService from "./FirebaseUserService";

const serviceAccount = require('@firebaseConfig/phonebook-2213e-firebase-adminsdk-czkv7-876c1bdd4a.json')
const firebaseConfig = require('@firebaseConfig/firebase-config.json')

const auth = getAuth(firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount as firebaseAdmin.ServiceAccount),
    databaseURL: 'https://phonebook-2213e-default-rtdb.europe-west1.firebasedatabase.app'
}));
const firestore = getFirestore(initializeApp(firebaseConfig));

/**
 * Firebase Database Class
 * @extends FirebaseDatabase
 */
class FirebaseDatabase extends AbstractDatabase {
    protected factory(): void {
        this.authService = new FirebaseAuthService(this, auth)
        this.userService = new FirebaseUserService(this, auth)
    }
}

export default FirebaseDatabase
