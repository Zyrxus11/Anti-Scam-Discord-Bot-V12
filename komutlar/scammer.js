const Discord = require("discord.js");
const generator = require('generate-password');
const db = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require('moment-duration-format');

exports.run = async (client, message, args) => {

let member = message.mentions.users.first()
let sebep = args.slice(0).join(" ")
let guild = message.guild;
let kanal = db.fetch(`kanallog_${guild.id}`)
let sorumlu = db.fetch(`sorumlurol_${guild.id}`)
let log = `<@${message.author.id}> Destek İstedi.`

  let isim = await db.fetch(`etiketsistem_${message.guild.id}`);
  let isimYazi;
  if (isim == null) isimYazi = "Yeni bir destek var!";
  else isimYazi = `Yeni bir destek var <@&${sorumlu}>! `;

      



    var password = generator.generate({
        length: '5',
	      uppercase: false,
        numbers: true,
        symbols: false,
        lowercase: false,
        uppercase: false,
        excludeSimilarCharacters: false,
        exclude: false,
        strict: false,
    })


if(!sebep) return message.channel.send("**Submit the link of the scam site!!**")

        if(db.fetch(`desteksure.${message.author.id}.${message.guild.id}`) > Date.now()) {
    return message.channel.send(new Discord.MessageEmbed().setColor('RED').setTitle('The time has not expired to be able to support again.!').setDescription('You already wrote support in 5 minutes .\n• To write support again **'+moment.duration(db.fetch(`desteksure.${message.author.id}.${message.guild.id}`)-Date.now()).format('w [week], d [day], h [hour], m [minute], s [second]')+'** you have to wait.')); 
  } else {
    db.set(`desteksure.${message.author.id}.${message.guild.id}`, Date.now()+require('ms')('5m'));

      
const ban = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Sended!`, )
.setDescription(`<:verifybadge:911273117912006656> Thank you for your message, our officials are currently reviewing the site`)
.setTimestamp()



  message.channel.send(ban);
  
    const aa = new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(`Scam Site!`, )
.setDescription(`A User says this site is a scam.

Site : ${args[0]}
User : ${message.author}

Support Code : ${password}

`)
.setTimestamp()
    
const webhookClient = new Discord.WebhookClient('yourwebhookid', 'yourwebhooktoken');


webhookClient.send(aa)


  };


};
exports.conf = {
  enabled: true, //komutu açmaya yada kapatmaya yarar. / true = açık - false = kapalı
  guildOnly: true, //komutu sunucuya özelmi olucağını belirler.
  aliases: ['scammer'], //komutun diğer adlar buraya ne yazarsanız komut kullanırken bu da geçerli olucaktır.
  permLevel: 0 //komutun yetkisini ayarlar / bu komut için hiç bir yeetkiye gerek yok bu yüzden 0
};
exports.help = {
  name: 'scammer', //komutun ismidir. / prefix + paralarım şeklinde çalışır.
  description: 'Kullanıcıya Ban Atar', //komutun açıklamasıdır çok önemi yok!
  usage: '!ban @user <sebep>' //komutun kullanım şeklidir çok önemi yok!
};
