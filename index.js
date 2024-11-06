require('dotenv').config()
const {handleShortUrl} = require('./controller/url.controller')
const {connectionToMongoDb} = require('./connection/connectDb')

//Db connect
connectionToMongoDb('mongodb://127.0.0.1:27017/Discord-bot')

const { Client, GatewayIntentBits, Message } = require('discord.js');
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ] });

client.on('messageCreate', async (message) => {
    if(message.author.bot) return ;
    if(message.content.startsWith('create')){
        const url = message.content.split("create")[1]
        const shortUrl = await handleShortUrl(url)
        return message.reply({
            content : `Your short URL is http://yourdomain.com/${shortUrl}`
        })
    }
    message.reply({
        content : 'Hi from Bot'
    })
})

client.on('interactionCreate', interaction => {
    interaction.reply("Pong")
})

client.login(process.env.DISCORD_TOKEN)