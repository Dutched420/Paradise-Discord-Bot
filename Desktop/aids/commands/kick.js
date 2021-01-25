//  replace(/\D/g,'');

module.exports = {
    name: "kick",
    description: "Kicks a member",

    execute(message, args, bot, config) {
        let Discord = require("discord.js");
    
        if(message.member.roles.cache.has(config.adminRole));

        let user =  message.guild.members.cache.get(args[0].replace(/\D/g,''));
                
        if(!user) return message.channel.send("No user provided");
        if(!user.bannable) return message.channel.send("that user isnt kickable");

        let reason = "No reason specified";
        if(args[1]) reason = args.splice(1).join(" ");
        
        user.send("you got kicked for: ```" + reason + "```by " + message.author.tag).then(() => user.kick({reason: reason}));

    }};