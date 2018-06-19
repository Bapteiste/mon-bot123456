const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('message', function (message) {
  if (message.content === '/ping') {
    message.reply('nique ta race')
  }
  else if (message.content === '/black-hole') {
    message.reply('je suis un trou, salut !')
  }
  else if (message.content === '/insulte') {
    message.channel.send('BIG NOOB ! HAHAHAHAHAHA SHAME ON U !')
  }
  else if (message.content === '/send-nude') {
    message.channel.send('https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/3-whenblackhol.jpg')
  }
  else if (message.content === '/test') {
    message.channel.send('bonjour')
    message.delete(10000)
  }
  else if (message.content === '/kiboolette') {
    message.channel.send('Wiki : Kiboolette est le nouveau pseudonyme de Catus Fokeur, aussi connue sous son ancien nom Fumeur de Bamboo')
    message.delete(10000)
  }
  else if (message.content === '/help') {
    message.channel.send('Commandes principales \n /command-liste')
    message.delete(10000)
  }
})

bot.login(process.env.TOKEN)
