const discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    const botConfig = require('../botconfig.json')
    var prefix = botConfig.prefix
    var messageArray = message.content.split(' ')
    var command = messageArray[0]
    var arguments = messageArray.slice(1)
    var args = message.content.slice(prefix.length).split(/ +/)

    const target = args.slice(2).join(' ')

    if(target === 'pushs'){
        await message.reply('Ready for push ups?')
    } else if(target === 'sits'){
        await message.reply('Or do you want sit ups? :\ ')
    }
}

module.exports.help = {
    name: 'excercise',
    description: 'Do one single excercise',
    category: 'WORKOUT'
}