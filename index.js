const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('message', function (message) {
  if (message.content === '/ping') {
    message.reply('nique ta race')
  }
  else if (message.content === '/black-hole') {
    message.reply('je suis un trou, salut !')
  }
  else if (message.content === '/baptiste') {
    message.reply('merci de patienter')
  }
})

bot.login(process.env.TOKEN)
