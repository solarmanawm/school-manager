import {ErrorRequestHandler} from 'express';

const errorHandlerMiddleware: ErrorRequestHandler = (error, req, res, _next) => {
    const {status, code, message} = error;
    console.log(error)
    return res.status(status || 500).send({
        success: false,
        code,
        message,
    });
}

export default errorHandlerMiddleware
