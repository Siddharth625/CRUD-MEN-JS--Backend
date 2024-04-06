const mongoose = require( 'mongoose' );

const dbConnector = async () => {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_URL);
        console.log(
        "DB Connection successful!", 
        connect.connection.host,
        connect.connection.name
        );
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = dbConnector