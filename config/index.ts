import helmet from 'helmet';
import path from 'path'

import cors from './cors';
import morgan from './morgan';

const config = {
    cors,
    morgan,
    helmet: helmet(),
    port: 3001,
    path: {
        public: path.resolve(__dirname, 'public'),
    },
    api: {
        version: 1,
    },
};

export default config;
