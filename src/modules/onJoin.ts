import { GuildMember } from "discord.js";
import { autoroleService } from './autoroleService';
import { welcomeService } from './welcomeService';

export function onMemberJoin(member: GuildMember) {
    autoroleService(member);
    welcomeService(member);
}