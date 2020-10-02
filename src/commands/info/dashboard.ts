import { Message, MessageEmbed } from "discord.js";
let config = require('../../../../settings.json')

export default function dashboard(message: Message) {
    let dashboardEmbed = new MessageEmbed()
    .setAuthor("Nougat", 'https://cdn.discordapp.com/avatars/429587398511427584/a8d77ae510e68cc595c1ccda04a755fa.jpg?size=1024')
    .setColor((Math.random() * 0xFFFFFF << 0).toString(16))
    .setTitle("\🔗 Dashboard (!beta!)")
    .setURL(config.dashboard.url);

    message.channel.send(dashboardEmbed);
}