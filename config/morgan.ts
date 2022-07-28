import * as Morgan from 'morgan';

const stream: Morgan.StreamOptions = {
    write: (message) => console.log(message),
};

const skip = () => {
    const env = process.env.NODE_ENV || "development";
    return env !== "development";
};

const morganMiddleware = Morgan.default(
    ":method :url :status :res[content-length] - :response-time ms",
    {
        stream,
        skip,
    },
);

export default morganMiddleware;
