const ms = require('ms');
module.exports = (client, instance) => {
    client.on("ready", () =>{
        
        function randomStatus(){
         let status = 
         ["prefix = c.", 
         `${client.guilds.cache.get(process.env.serverID).memberCount} members`, 
         `${ms(client.uptime, { long: true })} uptime`, 
         "monke", 
         "cannoningparadise.club", 
         "made by dutch"]
         
         let rstatus = Math.floor(Math.random() * status.length);
         client.user.setActivity(status[rstatus], {type: "STREAMING", url: "https://www.twitch.tv/orh2004"});
            
             }; 
                 setInterval(randomStatus, 60000)
                 console.log(`${client.user.tag} is online`);    
             })
            }
