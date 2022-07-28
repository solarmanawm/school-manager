/// <reference types="node" />
declare const morganMiddleware: (req: import("http").IncomingMessage, res: import("http").ServerResponse, callback: (err?: Error | undefined) => void) => void;
export default morganMiddleware;
