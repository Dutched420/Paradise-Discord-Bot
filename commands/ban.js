const DiscordJS = require('discord.js');
module.exports = {
    minArgs: 0,
    maxArgs: -1,
    description: "Bans a user",
    requiredPermissions: ['ADMINISTRATOR'],
    async callback ({ message, args, client }) {

            let user =  message.guild.members.cache.get(args[0].replace(/\D/g,''));
                    
            if(!user) return message.channel.send("No user provided");
            if(!user.bannable) return message.channel.send("that user isnt bannable");
    
            let reason = "No reason specified";
            if(args[1]) reason = args.splice(1).join(" ");
            
            const embed = new DiscordJS.MessageEmbed()
            .setTitle('⚠️ You have been banned ⚠️')
            .setThumbnail(`https://cdn.discordapp.com/attachments/801944189830692864/811322238426284062/pack.png`)
            .setDescription("Reason: " + reason +  " \nby " + message.author.tag + "\n appeal at: http://cannoningparadise.club/appeal")
            .setFooter(process.env.botversion)
            .setColor(process.env.embedcolor)

            const embed2 = new DiscordJS.MessageEmbed()
            .setTitle('⚠️ Ban executed! ⚠️')
            .setThumbnail(`https://cdn.discordapp.com/attachments/801944189830692864/811322238426284062/pack.png`)
            .setDescription("Reason: " + reason +  " \nby " + message.author.tag + "\n" + message.createdAt)
            .setFooter(process.env.botversion)
            .setColor(process.env.embedcolor)
            
            user.send(embed).then(() => user.ban({reason: reason})).then(message.channel.send(embed2))
        }
        
    }
