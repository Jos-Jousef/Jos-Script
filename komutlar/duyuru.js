const Discord = require('discord.js');

 exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);

   let question = args.slice(0).join(' ');

   let user = message.author.username

    const embedd = new Discord.MessageEmbed()

     .setDescription(`Yazı Yazman Gerek`);
   
   if (!question) return message.channel.send(embedd).then(m => m.delete(5000));

     const embed = new Discord.MessageEmbed()
   
     message.channel.send(embed).then(function(message) {
 message.channel.send("@here ^^") 

       });

      };
      exports.conf = {
          enabled: true, 
          guildOnly: false, 
          aliases: ["duyuru"], 
          permLevel: 0 
      };
        
        exports.help = {
          name: 'duyuru', 
          description: 'The Help Command',
          usage: 'help'
      };