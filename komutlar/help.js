const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{

        const aaaa = new Discord.MessageEmbed()
          .setAuthor("Anti Scam")
          .setDescription(`
To turn on the system: +block-scam on
To turn off the system: +block-scam off

Is there a missing scam site in the system? Contact us now! : +scammer
`)
          .setColor("GREEN")
                    .setImage('https://cdn.discordapp.com/attachments/915179207938674689/942090757135818852/antiiiiiiscam.png')
message.channel.send(aaaa)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['help'],
 permLevel: 0
};

exports.help = {
 name: 'help',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};
