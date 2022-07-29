import helmet from 'helmet';
import path from 'path'

import cors from './cors';
import morgan from './morgan';
const IS_DEV = process.env.NODE_ENV === 'development';

const config = {
    cors,
    morgan,
    helmet: helmet(),
    port: IS_DEV ? 3001 : 80,
    path: {
        public: path.resolve(__dirname, '../public'),
    },
    api: {
        version: 1,
    },
};

export default config;
