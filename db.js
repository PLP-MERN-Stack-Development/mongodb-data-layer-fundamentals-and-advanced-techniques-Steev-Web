// Import MongoDB client
const mongoose = require('mongoose'); 


require('dotenv').config();

async function connectDB() {
    try {   
        await mongoose.connect(process.env.MONGOATLAS_URI);
        console.log('Connected to MongoDB');
    }
        catch (error) {
        console.log('Error connecting to MongoDB:', error);
    }
}

module.exports = {connectDB, mongoose};
    

