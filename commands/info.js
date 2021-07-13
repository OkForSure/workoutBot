const discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    
    var okEmbed = new discord.MessageEmbed()
            .setTitle('Info')
            .setColor('#7388da')
            .addFields(
                {name: "Bot Name", value:`${client.user.username}`},
                {name: "test", value:"ok"},
                {name: "test", value:"ok"},
                {name: "test", value:"ok"}
            )
            .setThumbnail('https://i.imgur.com/kmzNW9v.png')
            .setImage('https://i.imgur.com/kmzNW9v.png')
            .setFooter('ok', 'https://i.imgur.com/kmzNW9v.jpg')
            .setTimestamp()

        return message.channel.send(okEmbed)
}

module.exports.help = {
    name: 'info',
    description: 'Info about the bot    :mechanical_arm:',
    category: 'GENERAL'
}