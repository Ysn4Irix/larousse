#!/usr/bin/env node

/**
 * larousse
 * A command line interface to get french word definitions & synonymes from larousse website
 *
 * @author Ysn4Irix <https://ysnirix.live>
 */

const init = require('./utils/init')
const cli = require('./utils/cli')
const log = require('./utils/log')
const { getDefinitions, getSynonymes } = require('./utils/larousse')

const input = cli.input
const flags = cli.flags

;(async () => {
	const wordFlag = flags.word || flags.w
	const outputFlag = flags.output || flags.o

	if (input.length === 0) {
		init()
		cli.showHelp(0)
	}

	flags.help && cli.showHelp(0)

	input.includes('define') && (await getDefinitions(wordFlag, outputFlag))

	input.includes('syno') && (await getSynonymes(wordFlag, outputFlag))

	flags.debug && log(flags)
})()
