const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
let config = JSON.parse(fs.readFileSync("./settings.json", "utf-8"))
client.commands = new Discord.Collection();

client.once('ready', () =>{
    console.log(`@${client.user.tag} is online`);
});

client.on('guildMemberAdd', guildMember =>{
  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === config.autoRole);
  guildMember.roles.add(welcomeRole);
  guildMember.guild.channels.cache.get(config.welcomeChannel).send(`🌴 Welcome <@${guildMember.user.id}> to Cannoning Paradise! You are member #${guildMember.guild.memberCount}! 🌴`);
});

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message =>{
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args, client, config);
    } else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args, client, config);
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args, client, config);   
   
        // kick and ban decided to monk will fix later
   // } else if (command == 'kick'){
   //     client.commands.get('kick').execute(message, args, client, config);
   // } else if (command == 'ban'){
   //     client.commands.get('ban').execute(message, args, client, config);
   
} else if (command == 'website'){
        client.commands.get('website').execute(message, args, client, config);
    }
})
    
client.login(config.token);