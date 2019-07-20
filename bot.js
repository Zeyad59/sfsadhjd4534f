const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', ()  => {
 console.log('Loading..');
});

client.on('message', function(message) {
     if (message.content === "*help") {
        message.channel.send(`:neutral_face:انت عايز ايه بي الهيلب؟`)
     }
});

client.login(process.env.Bot_Token);
