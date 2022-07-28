import helmet from 'helmet';
import path from 'path'

import cors from './cors';
import morgan from './morgan';

const serviceAccount = require('../phonebook-2213e-firebase-adminsdk-czkv7-876c1bdd4a.json');
const firebaseConfig = require('../firebase-config.json');

const config = {
    cors,
    morgan,
    helmet: helmet(),
    port: 3001,
    path: {
        public: path.resolve(__dirname, '../public'),
    },
    api: {
        version: 1,
    },
    serviceAccount,
    firebaseConfig,
};

export default config;
