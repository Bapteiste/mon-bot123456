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
  else if (message.content === '/repondre-to-cop1') {
    message.reply('De type trou noir, les hommes aime les trous peu importe la couleur.')
  }
  else if (message.content === '/baptiste') {
    message('BIG NOOB ! HAHAHAHAHAHA SHAME ON U !')
  }
})

bot.login(process.env.TOKEN)
