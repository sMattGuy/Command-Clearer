const { REST, Routes } = require('discord.js');
const { parseArgs } = require('node:util');

const arg_options = {
	'clientId':{
		type: 'string',
		short: 'c',
	},
	'guildId':{
		type: 'string',
		short: 'g',
	},
	'token':{
		type: 'string',
		short: 't',
	},
	'server-only':{
		type: 'boolean',
		short: 's',
		default: false,
	},
	'global-only':{
		type: 'boolean',
		short: 'G',
		default: false,
	},
}

const args = process.argv.slice(2);
if(args.length != 6 && args.length != 8){
	console.log('Usage: index.js -c clientid -g guildid -t token\nOptional (default: false) -s bool server only, -G bool global only');
	return
}
const {
	values,
	positionals,
} = parseArgs({args,options:arg_options,allowPositionals:true});

const clientId = values['clientId'];
const guildId = values['guildId'];
const token = values['token'];
const server_only = values ['server-only'];
const global_only = values['global-only'];

const rest = new REST().setToken(token);
(async () => {
	try {
		if(!server_only){
			await rest.put(
				Routes.applicationCommands(clientId),
				{ body: "" },
			);
			console.log('global commands cleared');
		}
		if(!global_only){
			const data = await rest.put(
				Routes.applicationGuildCommands(clientId, guildId),
				{ body: "" },
			);
			console.log('server commands cleared');
		}
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();