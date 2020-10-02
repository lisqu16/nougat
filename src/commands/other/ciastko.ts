export default function ciastko(message, client) {
    let uzytnik = client.users.cache.find(user => user.username === message.author.username).toString();
    message.channel.send(`${uzytnik}, masz tu: \🍪`)
}