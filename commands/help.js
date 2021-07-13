const discord = require('discord.js')
const botConfig = require('../botconfig.json')

module.exports.run = async (client, message, args) => {
    
    var commandList = []
    var prefix = botConfig.prefix

    client.commands.forEach(command => {
        var constructor = {
            name: command.help.name,
            description: command.help.description,
            category: command.help.category
        }
        commandList.push(constructor)
    })
    var response = '> **WORKOUT COMMANDS**\n > \n > '
    var general = "**__ALGEMEEN COMMANDS__**\n  "
    var fun = "> \n > **__FUN COMMANDS__**\n "
    var works = '> \n > **__WORKOUT COMMANDS__** \n '

    for (let i = 0; i < commandList.length; i++) {
        const command = commandList[i];
        if(command['category'] == "GENERAL"){
            general += `> ${prefix}${command['name']}    --    ${command['description']}\n`
        } else if(command['category'] == 'FUN'){
            fun += `> ${prefix}${command['name']}    --    ${command['description']}\n`
        } else if(command['category'] == 'WORKOUT'){
            works += `> ${prefix}${command['name']}    --    ${command['description']}\n`
        }
    }

    response += general
    response += fun
    response += works

    message.author.send(response).then(() => {
        message.reply('I send it in your private messages...')
    }).catch(() => {
        message.reply('Your private messages are closed, so I did not send it.')
    })

}

module.exports.help = {
    name: 'help',
    description: 'The commands for this server',
    category: 'GENERAL'
}