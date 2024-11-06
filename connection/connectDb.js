const mongoose = require('mongoose')

async function connectionToMongoDb(url){
    try {
        await mongoose.connect(url)
        .then(()=> console.log('MongoDB Connected !'))
        .catch((error)=> console.log(error))
    } catch (error) {
        console.log('Error: ', error);
    }
}

module.exports = {
    connectionToMongoDb
}