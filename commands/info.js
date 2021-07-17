const ms = require('ms');
const DiscordJS = require('discord.js');
module.exports = {
    minArgs: 0,
    maxArgs: 0,
    aliases: ['serverinfo', 'server-info', 'botinfo', 'bot-info'],
    description: "Gives you information about the server/bot",
    callback: ({ message, args, client }) => {
        const embed = new DiscordJS.MessageEmbed()
        .setTitle('🌴 Cannoning Paradise 🌴')
        .setURL(process.env.webSite)
        .setThumbnail(`https://media.discordapp.net/attachments/753248483305324634/793148542637047828/Comp_1_55.gif?width=360&height=360`)
        .setFooter(process.env.botversion)
        .setColor(process.env.embedcolor)
        .addFields(
          {
            name: 'Government spy',
            value: `Sublty controlling ${client.guilds.cache.get(process.env.serverID).memberCount} members`,
            inline: true,
          },
          {
            name: 'Uptime',
            value: `Bot has been up for: ${ms(client.uptime, { long: true })}`,
            inline: false,
          },
          {
            name: 'Bot latency',
            value: `Latency is ${Math.round(client.ws.ping)}ms`,
            inline: true,
          },
          {
            name: 'Made by:',
            value: 'Dutch',
          },
          {
          name: 'Special thanks to',
          value: 'Orh, Hadan, Nathan and Chass',
        }
        )
  
        message.reply(embed)
        }}