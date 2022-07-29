/// <reference types="cors" />
/// <reference types="node" />
declare const config: {
    cors: (req: import("cors").CorsRequest, res: {
        statusCode?: number | undefined;
        setHeader(key: string, value: string): any;
        end(): any;
    }, next: (err?: any) => any) => void;
    morgan: (req: import("http").IncomingMessage, res: import("http").ServerResponse, callback: (err?: Error | undefined) => void) => void;
    helmet: (req: import("http").IncomingMessage, res: import("http").ServerResponse, next: (err?: unknown) => void) => void;
    port: number;
    path: {
        public: string;
    };
    api: {
        version: number;
    };
};
export default config;
