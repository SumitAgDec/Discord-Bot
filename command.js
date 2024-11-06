const { REST, Routes } = require('discord.js')

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
    {
        name: 'create',
        description: "Create a new short url"
    }
    
  ];

const rest = new REST({ version: '10' }).setToken('MTMwMzYyNTgxNTQ3NjUzOTQzMw.G4K8fG.fgvEq0ZPLgeg6kMvaAR7ABDBTGzczp1IvLRu6cc');

try {
    console.log('Started refreshing application (/) commands.');
  
    rest.put(Routes.applicationCommands('1303625815476539433'), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }