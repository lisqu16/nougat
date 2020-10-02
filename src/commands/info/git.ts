import { MessageEmbed } from 'discord.js';

export default function git(message) {
    let color = (Math.random() * 0xFFFFFF << 0);
    const infoEmbed = new MessageEmbed()
    .setAuthor("Nougat", 'https://cdn.discordapp.com/avatars/429587398511427584/a8d77ae510e68cc595c1ccda04a755fa.jpg?size=1024')
    .setColor(color.toString(16))
    .setTitle("Nougat jest open source!")
    .setDescription("No bo większość botów nie jest.\n\n\[🔗 Github](https://github.com/lisqu16/nougat/)");
    message.channel.send(infoEmbed);
}