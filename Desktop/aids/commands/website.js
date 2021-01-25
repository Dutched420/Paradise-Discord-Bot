const { Client } = require("discord.js");

module.exports = {
    name: 'website',
    description: "Link to our website",
    async execute(message, args, bot, config){
        message.author.send(`Our website made by Hadan:`);
        message.author.send(`${config.webSite}`);
        message.channel.send(`🌴 ${message.author} check your dms! 🌴`)
    }
}
