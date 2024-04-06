const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case (404):
            res.json({
                title: "Not Found",
                message: err.message, 
                stackTrace: err.stack})
            break;
        case (400):
            res.json({
                title: "Validation Error",
                message: err.message, 
                stackTrace: err.stack})
            break;
        case (401):
            res.json({
                title: "Unauthorized",
                message: err.message, 
                stackTrace: err.stack})
            break;
        case (403):
            res.json({
                title: "Forbidden",
                message: err.message, 
                stackTrace: err.stack})
            break;
        case (500):
            res.json({
                title: "Internal Server Error",
                message: err.message, 
                stackTrace: err.stack})
            break;
        default:
            console.error("No Errors, All Good!");
            break;
    }
    res.json({message: err.message, stackTrace: err.stack})
};

module.exports = errorHandler;