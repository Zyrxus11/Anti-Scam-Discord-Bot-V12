const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client({ disableMentions: 'everyone' });
const ayarlar = require('./main.js');
const fs = require('fs');
const moment = require('moment');
const generator = require('generate-password');
moment.locale('tr');
require('moment-duration-format');

require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};


  // Oynuyor Kısmı
  


client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login('OTQyMDUxMTEyMjMwNDUzMjU5.Yge3dw.NmJAJBatz0FtsQkdHweTYR73cF8');



client.on('message', async (msg, args)  => {
  if (!msg.guild) return;
     const i = await db.fetch(`kufur_${msg.guild.id}`)
         if (i == "on") {
//Do not enter any site here, it is a scam.
      const kufur = ["dis.gg","rublux.com","rublux.co","discurd","hyper-events","dsc.com","airdrop","discord-faq","discurd.gift","gilt","dicsordgift","discurd.gift","discord.gilt","disscord.com","disscord.gift",".guft","scamlink","developers.tk",".ce","disscord.com","discordepp.com","discordepp.co","discqrd","discooord.net","developers.cf","discoord.gift","discorddevelopers.com"];
//Do not enter any site here, it is a scam.
  if (kufur.some(word => msg.content.toLowerCase().includes(word)) ) {
      msg.delete()
    db.add(`sendedlink.${msg.author.id}.${msg.guild.id}`, 1)
    const olamaz = db.fetch(`sendedlink.${msg.author.id}.${msg.guild.id}`)
            const aaaa = new Discord.MessageEmbed()
          .setAuthor("Scam Link Blocker")
          .setDescription(`
**The site considered as a scam site has been blocked on my system.**

Sended By : ${msg.author}
Scam Link/Message : ||${msg}||
Number of scam links submitted by the user (This Server): ${olamaz}

**Generally, such links are sent due to account theft.**

`)
            .setImage('https://cdn.discordapp.com/attachments/915179207938674689/942095283741941780/antiiiiiiscam.png')
          .setColor("RED")
       msg.reply(aaaa)
    
    const webhookClient = new Discord.WebhookClient('yourwebhookid', 'yourwebhooktoken');
            const aaaaaa = new Discord.MessageEmbed()
          .setAuthor("Scam Link Blocker")
          .setDescription(`
Yeni bir dolandırıcı belirdi!

Kullanıcı : ${msg.author}
Kullanıcı IDsi :${msg.author.id}
Gönderdiği link : ${msg}

Kullanıcı başarı ile discorda şikayet edildi.

[Şikayet](https://support.discord.com)
`)
            .setImage('https://cdn.discordapp.com/attachments/915179207938674689/942095283741941780/antiiiiiiscam.png')
          .setColor("RED")
    }
}
         
  
}); 
 
