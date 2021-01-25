module.exports = {
    name: 'ping',
    description: "test if the bot is working",
    execute(message, args){
            message.channel.send('pong');
    }
}