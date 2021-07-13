const discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const excerciseHelpEmbed = new discord.MessageEmbed()
        .setTitle('All excercises')
        .setDescription('Use `!excercise  [excercise]` ')
        .setColor('#7388da')

    const armHelpEmbed = new discord.MessageEmbed()
        .setTitle('Arm excercises')
        .addFields( 
            {name: 'Push ups', value: '\u200B', inline: true},
            {name: 'Diamond push up', value: '\u200B', inline: true},
            {name: 'Burpee', value: '\u200B', inline: true},
        )
        .setColor('#7388da')
        .setTimestamp()
        .setFooter(message.member.user.tag, 'https://i.imgur.com/wSTFkRM.png')

    const abHelpEmbed = new discord.MessageEmbed()
        .setTitle('Ab excercises')
        .addFields( 
            {name: 'Sit up', value: '\u200B', inline: true},
            {name: 'Penguin', value: '\u200B', inline: true},
        )
        .setColor('#7388da')
        .setTimestamp()
        .setFooter(message.member.user.tag, 'https://i.imgur.com/wSTFkRM.png')  

    message.channel.send(excerciseHelpEmbed)
    message.channel.send(armHelpEmbed)
    message.channel.send(abHelpEmbed)

}

module.exports.help = {
    name: 'excercises',
    description: 'Every good excercise',
    category: 'WORKOUT'
}