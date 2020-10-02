import { MessageEmbed, Message } from 'discord.js';
import { Nougat } from '../../main/main';
let config = require('../../../../settings.json')

export default function top(message: Message, args) {
    //message.channel.send("Sprawdź na: "+config.dashboard.url)
    switch(args[0]) {
        case "hajs":
        Nougat.Uzytnik.find({}, (err, topa) => {
            if(!topa || err) return;
            topa.sort((a, b) => {return b.hajs-a.hajs});
            const bogatyEmbed = new MessageEmbed()
            .setAuthor('Nougat', 'https://cdn.discordapp.com/avatars/429587398511427584/a8d77ae510e68cc595c1ccda04a755fa.jpg?size=1024')
            .setColor((Math.random() * 0xFFFFFF << 0).toString(16))
            .setTitle('Top 10 najbogatszych ogólnie')
            .setDescription("👀 [Zobacz w panelu]("+config.dashboard.url+")");
            
            topa.forEach((item, index) => {
                if(index < 10) {
                    bogatyEmbed.addField(index+1+". "+item.nick, item.hajs+" BTC");
                }
            });
            message.channel.send(bogatyEmbed)
        })
        break;
        default:
        let arrtop = [];
        Nougat.Uzytnik.find({}, (err, topa) => {
            if(!topa || err) return;
            topa.forEach(memberr => {
                let ta = memberr.serwery.find(x => x.id == message.guild.id)
                if(ta) {
                    arrtop.push({
                        nick: memberr.nick,
                        punkty: ta.punkty
                    })
                }
            })
            arrtop.sort((a, b) => {return b.punkty-a.punkty});
            const biednyEmbed = new MessageEmbed()
            .setAuthor('Nougat', 'https://cdn.discordapp.com/avatars/429587398511427584/a8d77ae510e68cc595c1ccda04a755fa.jpg?size=1024')
            .setColor((Math.random() * 0xFFFFFF << 0).toString(16))
            .setTitle('Top 10 najaktywniejszych na tym serwerze')
            .setDescription("👀 [Zobacz w panelu]("+config.dashboard.url+")");
            arrtop.forEach((aktywny, index) => {
                if(index < 10) {
                    biednyEmbed.addField(aktywny.nick, aktywny.punkty+" BTC");
                }
            })

            message.channel.send(biednyEmbed)
        })
        break;
    }
    
}