import { MessageEmbed, Message } from 'discord.js';
import { Nougat } from '../../main/main';
let config = require('../../../../settings.json')

export default function rank(args, message: Message) {
    Nougat.Uzytnik.find({}, (err, topa) => {
        if(err || !topa) return;
        topa.sort((a, b) => {return b.hajs-a.hajs});
        const biednyEmbed = new MessageEmbed()
        .setAuthor('Nougat', 'https://cdn.discordapp.com/avatars/429587398511427584/a8d77ae510e68cc595c1ccda04a755fa.jpg?size=1024')
        .setColor((Math.random() * 0xFFFFFF << 0).toString(16));

        topa.forEach((item, index) => {
            if(item.uid == message.author.id) {
                biednyEmbed.addField("Hajs ogólnie", `${index+1} miejsce`, true);
            }
        });

        let ri = 0;
        topa.forEach((item) => {
            if(message.guild.members.cache.get(item.uid)) {
                ri++;
                if(item.uid == message.author.id) biednyEmbed.addField("Punkty aktywności na serwerze", `${ri} miejsce`, true)
            }
        })

        message.channel.send(biednyEmbed)
    })
}