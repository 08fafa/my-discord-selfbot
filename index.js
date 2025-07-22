const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const config = {
    token: process.env.TOKEN || 'YOUR_TOKEN_HERE',
    prefix: process.env.PREFIX || ';',
    userId: process.env.USER_ID || 'YOUR_USER_ID_HERE'
};

client.on('ready', async () => {
    console.log(`\n\x1b[35m░▒▓███████▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓█▓▒░ \x1b[37m░▒▓████████▓▒░ \x1b[35m░▒▓████████▓▒░  \n\x1b[35m░▒▓█▓▒░░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓█▓▒░  \n\x1b[35m░▒▓█▓▒░░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓██▓▒░  \n\x1b[35m░▒▓███████▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓██▓▒░  \n\x1b[35m░▒▓█▓▒░░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓██▓▒░  \n\x1b[35m░▒▓█▓▒░░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓█▓▒░  \n\x1b[35m░▒▓███████▓▒░ \x1b[37m░▒▓████████▓▒░ \x1b[35m░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓████████▓▒░  \n\x1b[0m\nLogged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if (message.author.id !== config.userId) return;
    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // Example command: ping
    if (command === 'ping') {
        message.reply(`Pong! Latency is ${client.ws.ping}ms.`);
    }

    // autoreply command
    if (command === 'autoreply') {
        const trigger = args[0];
        const response = args.slice(1).join(' ');
        if (!trigger || !response) {
            return message.reply('Usage: ;autoreply <trigger> <response>');
        }
        // In a real application, you would save these to a database or file
        // For this example, we'll just acknowledge it.
        message.reply(`Autoreply set: when I see \`${trigger}\`, I will reply with \`${response}\`.`);
    }

    // info command
    if (command === 'info') {
        const commandsCount = 29; // This should be dynamically calculated in a real bot
        message.reply(`
BLITZ.F08 ON IG

\x1b[35m░▒▓███████▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓█▓▒░ \x1b[37m░▒▓████████▓▒░ \x1b[35m░▒▓████████▓▒░  
\x1b[35m░▒▓█▓▒░░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓█▓▒░  
\x1b[35m░▒▓█▓▒░░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓██▓▒░  
\x1b[35m░▒▓███████▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓██▓▒░  
\x1b[35m░▒▓█▓▒░░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓██▓▒░  
\x1b[35m░▒▓█▓▒░░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓█▓▒░  
\x1b[35m░▒▓███████▓▒░ \x1b[37m░▒▓████████▓▒░ \x1b[35m░▒▓█▓▒░ \x1b[37m░▒▓█▓▒░ \x1b[35m░▒▓████████▓▒░  

User: ${client.user.tag}
Prefix: ${config.prefix}
Commands: ${commandsCount}
`);
    }
});

client.login(config.token);

