const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if(args[0] === 'on') {
    db.set(`kufur_${message.guild.id}`, "on")
            const sucembed = new Discord.MessageEmbed()
          .setAuthor("✅ Successful!")
          .setDescription("**Fake links will now be blocked!**")
          .setColor("GREEN")

        message.channel.send(sucembed)
  return
}
if (args[0] === 'off') {
  db.delete(`kufur_${message.guild.id}`)
                    const dunya = new Discord.MessageEmbed()
          .setAuthor("✅ Successful!")
          .setDescription("**Fake links will no longer be blocked!**")
          .setColor("GREEN")
  message.channel.send(dunya)
  return
}
        const aaaa = new Discord.MessageEmbed()
          .setAuthor("Scam Link Blocker")
          .setDescription(`
To turn on the system: +block-scam on
To turn off the system: +block-scam off

`)
          .setColor("GREEN")
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['scam'],
 permLevel: 0
};

exports.help = {
 name: 'block-scam',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};
