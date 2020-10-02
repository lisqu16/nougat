var pozwany = []
var powod = [];
var wesolowska = "http://ro.com.pl/wp-content/uploads/2014/11/wesolowska.jpg";
import { MessageEmbed } from 'discord.js';

export default function sad(message,  pozwijmode, pozwijmodev) {
    if(pozwijmode[message.author.id] == true) {
        // pozwij mode etap 1: wychwytuje mention kogo chcesz pozwac i pyta o powod
        if(pozwijmodev[message.author.id] == 1) {
            if(message.mentions.members.first()) {
                pozwany[message.author.id] = message.mentions.members.first();
                message.channel.send(`Więc, pozywasz ${pozwany[message.author.id]}, o co go pozywasz?`)
                    .then(() => {
                        pozwijmodev[message.author.id] = 2;
                    })
            } else if(message.content.includes("anuluj")) {
                message.channel.send("Anulowano.");
                pozwijmodev[message.author.id] = null;
                pozwijmode[message.author.id] = null;
            } else {
                message.channel.send('No kogo pozywasz Janusz, oznacz go, nie wstydź się, albo napisz anuluj, aby anulować pozew!');
            }
        }
        // pozwij mode etap 2: wyswietla dane i pyta o ich prawidlowosc
        else if(pozwijmodev[message.author.id] == 2) {
            if(typeof pozwany[message.author.id] == 'undefined') return;
            powod[message.author.id] = message.content;
            if(powod[message.author.id] == "anuluj") {
                message.channel.send("Anulowano pozew.")
                pozwijmodev[message.author.id] = null;
                pozwijmode[message.author.id] = null;
                return;
            }
            const embed = new MessageEmbed()
                .setColor((Math.random() * 0xFFFFFF << 0).toString(16))
                .setAuthor("Sadownictwo", wesolowska)
                .setTitle(`${message.author.tag} pozywa ${pozwany[message.author.id].displayName}`)
                .setDescription(`bo ${powod[message.author.id]}\n`)
                .setThumbnail('http://sadarbitrazowy.com.pl/img/mlotek.png')
                .addField('Wszystko się zgadza?', 'Tak/Nie');
            message.channel.send({
                    embed
                })
                .then(() => {
                    pozwijmodev[message.author.id] = 3;
                })
        }
        // pozwij mode etap 3: wychwytuje odpowiedz i w zaleznosci od niej pozywa i resetuje pozwijmode
        else if(pozwijmodev[message.author.id] == 3) {
            if(message.content.toLowerCase() == 'nie') {
                const embed = new MessageEmbed()
                    .setAuthor("Sadownictwo", wesolowska)
                    .setTitle('W takim razie nikogo nie pozywasz! \🎉')
                    .setColor((Math.random() * 0xFFFFFF << 0).toString(16))
                message.channel.send(embed);
                pozwijmodev[message.author.id] = null;
                pozwijmode[message.author.id] = null;
            } else if(message.content.toLowerCase() == 'tak') {
                const embed = new MessageEmbed()
                    .setAuthor("Sadownictwo", wesolowska)
                    .setColor((Math.random() * 0xFFFFFF << 0).toString(16))
                    .setTitle("Pomyślnie pozwałeś " + pozwany[message.author.id].displayName + " \✅");
                message.channel.send(embed);
                const ofiara = new MessageEmbed()
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setTitle("Zostałeś pozwany przez " + message.author.tag)
                    .setColor((Math.random() * 0xFFFFFF << 0).toString(16));
                pozwany[message.author.id].send(ofiara);
                pozwijmodev[message.author.id] = null;
                pozwijmode[message.author.id] = null;
            } else {
                message.channel.send('Nie rozumiem!');
            }
        }
    }
}