const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('message', function (message) {
  if (message.content === '!ping') {
    message.reply('pong')
  }
})

bot.login('NDQ4NTI0MTEzNTU3MDYxNjQ3.DeXj6g.t_lNRx2VmKFuc8c1dkvSKGvMYg8')
