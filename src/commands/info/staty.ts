import { MessageEmbed } from 'discord.js';
import { Nougat } from '../../main/main';

export default function staty(message) {
    if (!message.guild) return;
    Nougat.Serwer.find({id: message.guild.id}, (err, guds) => {
        if(guds.length) {
            const statyEmbed = new MessageEmbed()
            .setAuthor("Nougat", 'https://cdn.discordapp.com/avatars/429587398511427584/a8d77ae510e68cc595c1ccda04a755fa.jpg?size=1024')
            .setColor((Math.random() * 0xFFFFFF << 0).toString(16))
            .setTitle("Statystyki serwera "+message.guild.name)
            .addField("Ogólnie wiadomości (od dodania Nougata)", guds[0].msgCount, true)
            .addField("Wysłanych komend do Nougata", guds[0].nougatCount, true);
            message.channel.send(statyEmbed);
        } else {
            message.channel.send("Wystąpił nieznany błąd. Spróbuj ponownie.")
        }
    })
}