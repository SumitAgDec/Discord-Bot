const ShortUrl = require("../models/shortUrl.model");
const { v4: uuidv4 } = require('uuid');

async function handleShortUrl (url){
    const shortID = uuidv4()
    const newShortUrl = await ShortUrl.create({
        shortId: shortID,
        redirectLink : url
    })
    const data = newShortUrl.shortId
    console.log(data);
    
    return String(data)
}

module.exports = {
    handleShortUrl
}