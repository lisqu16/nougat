import { User, Message } from 'discord.js';
import { usageEmbed } from '../../modules/errorEmbed';
export default function sms(args, message: Message) {
    let numer: User;
    if(message.mentions.users.first()) {
        numer = message.mentions.users.first();
    } else if(args[0]) {
        let bab = message.guild.members.cache.get(args[0]).user
        if(typeof bab != 'undefined') {
            numer = bab;
        }
    } else {
        message.channel.send(usageEmbed("*sms @ping/id wiadomość"))

        return;
    }
    let wiadomosc = args.slice(1).join(" ");
    if(typeof numer == 'undefined' || typeof wiadomosc == 'undefined') {
        message.channel.send(usageEmbed("*sms @ping/id wiadomość"))
        return;
    }
    numer.send('Wiadomość przychodząca od <@' + message.author.id + '>: ' + wiadomosc)
        .catch(() => {
            message.channel.send("Nie udało się wysłać wiadomości :/");
        })
    message.channel.send('Leci wiadomość');
}