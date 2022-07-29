import '../aliases'
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase-admin/auth";
import {getFirestore} from "firebase/firestore";
import * as firebaseAdmin from 'firebase-admin';

import AbstractDatabase from './AbstractDatabase'
import FirebaseAuthService from './FirebaseAuthService'
import FirebaseUserService from "./FirebaseUserService";

const {serviceAccount, firebaseConfig} = (() => {
    if (process.env.NODE_ENV === 'development') {
        const serviceAccount = require('@firebaseConfig/phonebook-2213e-firebase-adminsdk-czkv7-876c1bdd4a.json')
        const firebaseConfig = require('@firebaseConfig/firebase-config.json')

        return {serviceAccount, firebaseConfig}
    }

    const serviceAccount = {
        "type": process.env.SERVICE_ACOUNT_TYPE,
        "project_id": process.env.SERVICE_ACOUNT_PROJECT_ID,
        "private_key_id": process.env.SERVICE_ACOUNT_PRIVATE_KEY_ID,
        "private_key": process.env.SERVICE_ACOUNT_PRIVATE_KEY,
        "client_email": process.env.SERVICE_ACOUNT_CLIENT_EMAIL,
        "client_id": process.env.SERVICE_ACOUNT_CLIENT_ID,
        "auth_uri": process.env.SERVICE_ACOUNT_AUTH_URI,
        "token_uri": process.env.SERVICE_ACOUNT_TOKEN_URI,
        "auth_provider_x509_cert_url": process.env.SERVICE_ACOUNT_AUTH_PROVIDER,
        "client_x509_cert_url": process.env.SERVICE_ACOUNT_CLIENT_CERT_URL,
    }

    const firebaseConfig = {
        "apiKey": process.env.FIREBASE_API_KEY,
        "authDomain": process.env.FIREBASE_AUTH_DOMAIN,
        "databaseURL": process.env.FIREBASE_DATABASE_URL,
        "projectId": process.env.FIREBASE_PROJECT_ID,
        "storageBucket": process.env.FIREBASE_STORAGE_BUCKET,
        "messagingSenderId": process.env.FIREBASE_MESSAGING_SENDER_ID,
        "appId": process.env.FIREBASE_APP_ID,
    }


    return {
        serviceAccount,
        firebaseConfig,
    }
})()

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
