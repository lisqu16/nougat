import { MessageEmbed, Message } from 'discord.js';
let config = require('../../../../settings.json')

export default function help(message: Message) {
    let color = 0x11af60;

    const pomoc = new MessageEmbed()
        .setAuthor("Nougat", 'https://cdn.discordapp.com/avatars/429587398511427584/a8d77ae510e68cc595c1ccda04a755fa.jpg?size=1024')
        .setColor(color.toString(16))
        .addField("Administracja", "autorole **::** cytaty **::** clear **::** nazwa **::** warn")
        .addField("Ekonomia", "hajs **::** rank **::** top **::** zaplac")
        .addField("Informacja", "check **::** checkme **::** git **::** help **::** staty **::** userinfo")
        .addField("Obrazki", "jasny **::** kolory **::** sepia **::** przekrec")
        .addField("Inne", "8pilka **::** ciastko **::** mono **::** odwroc **::** pozwij **::** sms **::** statek **::** wybierz")
        .setDescription("\🔗 [Panel Użytkownika]("+config.dashboard.url+")")
        .setFooter('Nougat 5 (wczesna wersja)');

    message.channel.send(pomoc);
}