const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json');

var prefix = config.prefix;
var token = process.env.TOKEN;

client.on('ready', () => {
	console.log(`Bot Online\nName: ${client.user.username}\nID: ${client.user.id}`)
	client.user.setPresence({game: {name:"Opora"}});
})

client.on('message', msg => {
	if(msg.content.startsWith(prefix + "ata")){
		msg.reply('<:puto:494256215556096001>');
	};
	if(msg.content.startsWith(prefix + "ok")){
		msg.reply('ok é o krl pora >:C');
	};
	if(msg.content.startsWith(prefix + "sla")){
		msg.reply('aaaaa sla tbm');
	};
	if(msg.content.startsWith(prefix + "kkk")){
		msg.reply('KKK GADO D++');
	};
	else if (msg.content.startsWith(prefix + "kk")){
		msg.reply('KK EAE MEN');
	}
	else if (msg.content.startsWith(prefix + "k")){
		msg.reply('kk')
	}
});

client.login(token);