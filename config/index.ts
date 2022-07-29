import helmet from 'helmet';
import path from 'path'

import cors from './cors';
import morgan from './morgan';

const IS_DEV = process.env.NODE_ENV === 'development';

const config = {
    cors,
    morgan,
    helmet: helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'", '*.fontawesome.com', 'https://identitytoolkit.googleapis.com', ' https://kit.fontawesome.com'],
                scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://identitytoolkit.googleapis.com', ' https://kit.fontawesome.com'],
                styleSrc: ["'self'", "'unsafe-inline'", '*.fontawesome.com'],
                scriptSrcAttr: null,
            },
        },
    }),
    port: IS_DEV ? 3001 : process.env.PORT,
    path: {
        public: path.resolve(__dirname, IS_DEV ? '../public' : '../../public'),
    },
    api: {
        version: 1,
    },
};

export default config;
