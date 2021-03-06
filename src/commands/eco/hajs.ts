import { MessageEmbed } from 'discord.js';
import { Nougat } from '../../main/main';
let config = require('../../../../settings.json')

export default function hajs(args, message) {
    setTimeout(() => {
        if(args[0]) {
            if(args[0] == 'set') {
                // sprawdza czy pizza
                if(message.author.id == config.id) {
                    if(message.mentions.members.first() && args[2]) {
                        Nougat.Uzytnik.find({
                            uid: message.mentions.members.first().id
                        }, function(err, uzyt) {
                            if(uzyt.length) {
                                uzyt[0].hajs = Number(args[2]);
                                uzyt[0].save();
                                message.channel.send('Pomyślnie zmieniono!');
                            }
                        })
                    } else {
                        const biedaEmbed = new MessageEmbed()
                            .setAuthor('Nougat - Administracja bota', 'https://pbs.twimg.com/profile_images/3578001181/990ad36a51b8e483cde968adbb53df5a_400x400.png')
                            .setColor(0xF44336)
                            .setTitle('Błąd')
                            .setDescription('Oznacz komu chcesz zmienić i do tego jeszcze na co');
                        message.channel.send(biedaEmbed);
                    }
                }
            } else if(message.mentions.members.first()) {
                Nougat.Uzytnik.find({
                    uid: message.mentions.members.first().id
                }, function(err, uzyt) {
                    if(uzyt.length) {
                        const pktEmbed = new MessageEmbed()
                            .setAuthor('Nougat - ekonomia', 'https://cdn.discordapp.com/avatars/429587398511427584/a8d77ae510e68cc595c1ccda04a755fa.jpg?size=1024')
                            .setColor((Math.random() * 0xFFFFFF << 0).toString(16))
                            .setTitle('Stan konta użytkownika ' + message.mentions.members.first().displayName)
                            .setDescription(uzyt[0].hajs + ' BTC')
                            .setFooter('Hajs dostajesz za pisanie wiadomości, więc pisz!');
                        message.channel.send(pktEmbed);
                    } else {
                        message.channel.send('Nie znaleziono użytkownika!');
                    }
                });
            }
        } else {
            Nougat.Uzytnik.find({
                uid: message.author.id
            }, function(err, uzyt) {
                if(uzyt.length) {
                    const pktEmbed = new MessageEmbed()
                        .setAuthor('Nougat - ekonomia', 'https://cdn.discordapp.com/avatars/429587398511427584/a8d77ae510e68cc595c1ccda04a755fa.jpg?size=1024')
                        .setColor((Math.random() * 0xFFFFFF << 0).toString(16))
                        .setTitle('Stan konta użytkownika ' + message.author.username)
                        .setDescription(uzyt[0].hajs + ' BTC')
                        .setFooter('Hajs dostajesz za pisanie wiadomości, więc pisz!');
                    message.channel.send(pktEmbed);
                }
            });
        }
    }, 500)
}