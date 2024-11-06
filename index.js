const { Client, GatewayIntentBits, Message } = require('discord.js');
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ] });

client.on('messageCreate', (message) => {
    if(message.author.bot) return ;
    if(message.content.startsWith('create')){
        const url = message.content.split("create")[1]
        return message.reply({
            content : url
        })
    }
    message.reply({
        content : 'Hi from Bot'
    })
})

client.on('interactionCreate', interaction => {
    interaction.reply("Pong")
})

client.login("MTMwMzYyNTgxNTQ3NjUzOTQzMw.Gw4LGp.eaGLIOitnyOGEjvXWD7OT_2q26TVMuPPgA3Xcc")