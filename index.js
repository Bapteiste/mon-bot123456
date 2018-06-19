const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', () => {
  bot.user.setGame('/help')
})

bot.on('message', function (message) {
  if (message.content === '/ping') {
    message.reply('nique ta race')
  }
  else if (message.content === '/black-hole') {
    message.reply('je suis un trou, salut !')
  }
  else if (message.content === '/insulte') {
    message.channel.send('BIG NOOB ! HAHAHAHAHAHA SHAME ON U !')
    message.delete(1000)
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
    my_string = ''
    my_string += '***- Commandes principales - \n***'
    my_string += '```'
    my_string += '  /message-list \n'
    my_string += '```'
    message.channel.send(my_string)
    message.delete(10000)
  }
  else if (message.content === '/message-list') {
    my_string = ''
    my_string += '***- Liste des commandes messages - \n***'
    my_string += '```'
    my_string += '  /black-hole \n'
    my_string += '  /insulte \n'
    my_string += '  /send-nude \n'
    my_string += '  /kiboolette \n'
    my_string += '```'
    message.channel.send(my_string)
    message.delete(10000)
  }
})

bot.login(process.env.TOKEN)
