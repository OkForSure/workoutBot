const discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    var okEmbed = new discord.MessageEmbed()
            .setTitle(`Serverinfo for "${message.guild.name}"`)
            .addFields(
                {
                    name: 'Region',
                    value: message.guild.region,
                },
                {
                    name: 'Members',
                    value: message.guild.memberCount,
                },
                {
                    name: 'Owner',
                    value: message.guild.owner.user.tag,
                }
            )
            .setThumbnail(message.guild.iconURL())
            .setColor('#7388da')
            .setFooter(`${message.author.username}`, message.guild.iconURL())
            .setTimestamp()

        return message.channel.send(okEmbed)
    }

module.exports.help = {
    name: 'serverinfo',
    description: 'The info for this server',
    category: 'GENERAL'
}