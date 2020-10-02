import { MessageEmbed, Client, Message } from 'discord.js';

export default function check(message: Message, client: Client, mode)  {
    if (mode == 0) var klient = message.guild.members.cache.get(client.user.id);
    if (mode == 1) var klient = message.guild.members.cache.get(message.author.id);
    let embeded = new MessageEmbed()
    .setAuthor('Nougat', 'https://cdn.discordapp.com/avatars/429587398511427584/a8d77ae510e68cc595c1ccda04a755fa.jpg?size=1024')
    .setColor(0x123456);

    if (mode == 0) embeded.setTitle("Uprawnienia bota");
    if (mode == 1) embeded.setTitle("Twoje uprawnienia");

    let ok = "\✅";
    let nieok = "\❌";

    if(klient.hasPermission("MANAGE_MESSAGES")) {
        embeded.addField("Zarządzanie wiadomościami", ok, true);
    } else {
        embeded.addField("Zarządzanie wiadomościami", nieok, true);
    }

    if(klient.hasPermission("MANAGE_ROLES")) {
        embeded.addField("Zarządzanie rolami", ok, true);
    } else {
        embeded.addField("Zarządzanie rolami", nieok, true);
    }
    if(klient.hasPermission("CHANGE_NICKNAME")) {
        embeded.addField("Zmiana nicku", ok, true);
    } else {
        embeded.addField("Zmiana nicku", nieok, true);
    }

    if(klient.hasPermission("KICK_MEMBERS")) {
        embeded.addField("Wyrzucanie", ok, true);
    } else {
        embeded.addField("Wyrzucanie", nieok, true);
    }

    message.channel.send(embeded);
}