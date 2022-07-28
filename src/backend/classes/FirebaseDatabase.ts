import {initializeApp} from "firebase/app";
import {getAuth} from "firebase-admin/auth";
import {getFirestore} from "firebase/firestore";
import * as firebaseAdmin from 'firebase-admin';

import AbstractDatabase from './AbstractDatabase'
import FirebaseAuthService from './FirebaseAuthService'
import FirebaseUserService from "./FirebaseUserService";

import config from '../../../config'

const auth = getAuth(firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(config.serviceAccount),
    databaseURL: 'https://phonebook-2213e-default-rtdb.europe-west1.firebasedatabase.app'
}));
const firestore = getFirestore(initializeApp(config.firebaseConfig));

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
