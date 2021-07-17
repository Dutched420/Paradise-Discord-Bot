const DiscordJS = require('discord.js');
module.exports = {
    minArgs: 0,
    maxArgs: -1,
    description: "Manage user's nickname",
    aliases: ['nick'],
    requiredPermissions: ['ADMINISTRATOR'],
    async callback ({ message, args, client }) {

        const target = message.mentions.users.first()
        const member = message.guild.members.cache.get(target.id)
        let user = message.mentions.users.first();

        args.shift()
        const nickname = args.join(' ')
    
        member.setNickname(nickname)

        const embed = new DiscordJS.MessageEmbed()
        .setTitle('🌴 Cannoning Paradise 🌴')
        .setThumbnail(`https://cdn.discordapp.com/attachments/801944189830692864/811322238426284062/pack.png`)
        .setDescription(`${message.author.tag} updated ${user.tag}'s nickname!\nChanged ${user.tag} to ${target}`)
        .setFooter(process.env.botversion)
        .setColor(process.env.embedcolor)
    
        message.channel.send(embed)

    }
}
