const welcome = require('cli-welcome')
const pkg = require('./../package.json')
const unhandled = require('cli-handle-unhandled')

module.exports = () => {
	unhandled()
	welcome({
		title: `Larousse CLI`,
		tagLine: `by Ysn4Irix`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#053742',
		color: '#000000',
		bold: true
	})
}
