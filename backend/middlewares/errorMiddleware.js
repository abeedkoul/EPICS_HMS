class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`; //Error code 11000 is used to signify errors of duplication. For example if an email is already registered witht the site it will not allow it to register again.
        err = new ErrorHandler(message, 400);
    }
    if(err.name === "JsonWebTokenError"){
        const message = "Json Web Token is Invaid, Try Again";
        err = new ErrorHandler(message, 400);
    }
    if(err.name === "TokenExpiredError"){
        const message = "Json Web Token is Expired, Try Again";
        err = new ErrorHandler(message, 400);
    }
    if(err.name === "CastError"){ // this is for type errors basically if you enter text in number field this handles that
        const message = `Invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    const errorMessage = err.errors ? Object.values(err.errors).map(error=>error.message).join(" "): err.message;

    return res.status(err.statusCode).json({
        success: false,
        message: errorMessage,
    })
};


export default ErrorHandler;
