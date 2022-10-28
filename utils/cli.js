const meow = require('meow')
const meowHelp = require('cli-meow-help')

const flags = {
	word: {
		type: `string`,
		alias: 'w',
		desc: `The french word`
	},
	output: {
		type: `string`,
		alias: 'o',
		desc: `The path of where to save results`
	},
	clear: {
		type: `boolean`,
		default: false,
		desc: `Clear the console`
	},
	help: {
		type: `boolean`,
		default: false,
		desc: `Print help info`
	},
	debug: {
		type: `boolean`,
		default: false,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	}
}

const commands = {
	define: {
		desc: `Get the definition of a french word`
	},
	syno: {
		desc: `Get the synonymes of a french word`
	}
}

const helpText = meowHelp({
	name: `larousse`,
	commands,
	flags,
	defaults: false
})

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	allowUnknownFlags: false,
	flags
}

module.exports = meow(helpText, options)
