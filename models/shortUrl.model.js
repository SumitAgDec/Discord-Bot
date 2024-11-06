const mongoose = require('mongoose')

const shortUrlSchema = new mongoose.Schema({
    shortId: {
        type: String
    },
    redirectLink: {
        type: String
    }
})

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema)

module.exports = ShortUrl