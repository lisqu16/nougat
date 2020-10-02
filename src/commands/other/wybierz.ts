let config = require('../../../../settings.json')
import { usageEmbed } from '../../modules/errorEmbed';

export default function wybierz(args, message) {
    let a = message.content.slice(config.prefix.length+7).trim().split(" | ")
    if (a=="") return message.channel.send(usageEmbed("*wybierz rzecz | rzecz... | rzecz"));
    message.channel.send("Wybieram "+a[Math.floor((Math.random() * a.length) + 0)]);
}