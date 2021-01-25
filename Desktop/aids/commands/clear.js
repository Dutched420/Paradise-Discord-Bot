module.exports = {
    name: 'clear',
    description: "Clear messages",
    async execute(message, args, bot, config){

        if(message.member.roles.cache.has(config.adminRole)){
        
        if(!args[0]) return message.reply("Enter the amount of messages you want to clear");
        if(isNaN(args[0])) return message.reply("Please enter a number");

        if(args[0] > 50) return message.reply("You can't delete more than 50 messages");
        if(args[0] < 1) return message.reply("Delete atleast 1 message");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            
            message.reply('🌴 Finished clearing! 🌴')
            .then(msg => {
              msg.delete({ timeout: 10000 })
            })
            .catch(console.error);
        })};
    }
}