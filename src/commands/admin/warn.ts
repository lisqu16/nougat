import { Nougat } from "../../main/main";
import { MessageEmbed, Message } from "discord.js";
import { errorEmbed, usageEmbed } from "../../modules/errorEmbed";

export default function warn(args, message: Message) {
  let powod = args.slice(1).join(" ");
  let ofiara = message.mentions.members.first();
  if (typeof ofiara == "undefined") {
    message.channel.send(usageEmbed("warn @kogo powod"));
  } else {
    if (
      message.guild.members.cache.get(message.author.id).hasPermission("KICK_MEMBERS")
    ) {
      // dodaj warny użytkownikowi
      Nougat.Uzytnik.findOne(
        { uid: message.mentions.members.first().id },
        function(err, user) {
          let guild = user.serwery.find(guild => guild.id == message.guild.id);
          if (guild) {
              if(typeof(guild.warny) == 'undefined') guild.warny = 0;
              guild.warny++;
              user.save();
              // zakomunikuj
              const warnSEmbed = new MessageEmbed()
                  .setAuthor(
                      message.guild.name,
                      message.guild.iconURL()
                  )
                  .setTitle("Ostrzeżono użytkownika pomyślnie!")
                  .setDescription("To był "+guild.warny+" warn")
                  .setColor(0x198c41);
              message.channel.send(warnSEmbed);

              const warnAEmbed = new MessageEmbed()
                  .setAuthor(
                      message.guild.name,
                      message.guild.iconURL()
                  )
                  .setTitle("Zostałeś ostrzeżony")
                  .addField("Powód", powod)
                  .addField("Ilość warnów", guild.warny)
                  .setColor(0x198c41);
              ofiara.send(warnAEmbed);
          }
          }
      );
    } else {
      message.channel.send(errorEmbed("Nie masz uprawnień"));
    }
  }
}
