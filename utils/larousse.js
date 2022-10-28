const fs = require('fs')
const ora = require('ora')
const alert = require('cli-alerts')
const { green: g, yellow: y, dim: d, red: r, white: w } = require('chalk')
const { scrapeDefinitions, scrapeSynonymes } = require('./scraper')

const spinner = ora({
	text: ''
})

/**
 *
 * @param {string} word
 * @param {string} output
 */
const getDefinitions = async (word, output) => {
	console.log()
	try {
		if (!word) {
			alert({
				type: `error`,
				msg: `word flag is required! use --help for infos`
			})
			process.exit(-1)
		}
		if (!output) {
			alert({
				type: `error`,
				msg: `output flag is required! use --help for infos`
			})
			process.exit(-1)
		}

		spinner.start(`${y(`🚀 Working on it...`)} \n`)

		const definitions = await scrapeDefinitions(word)
		if (definitions === 'Not Found')
			return spinner.fail(`${r(`Word not found!`)}`)

		const file = fs.createWriteStream(`${output}/${word}-definitions.txt`)

		file.on('error', err => {
			spinner.clear()
			spinner.fail(`${r(`Error writing file`)}`)
		})

		definitions.forEach(v => {
			file.write(v + '\n')
		})

		file.end()

		spinner.succeed(`${g(`✅ File created successfully.`)}`)
	} catch (error) {
		spinner.clear()
		console.log('\n')
		spinner.fail(`${r(`Error`)}`)
		console.log(error.message)
	}
}

/**
 *
 * @param {string} word
 * @param {string} output
 */
const getSynonymes = async (word, output) => {
	console.log()
	try {
		if (!word) {
			alert({
				type: `error`,
				msg: `word flag is required! use --help for infos`
			})
			process.exit(-1)
		}
		if (!output) {
			alert({
				type: `error`,
				msg: `output flag is required! use --help for infos`
			})
			process.exit(-1)
		}

		spinner.start(`${y(`🚀 Working on it...`)} \n`)

		const Synonymes = await scrapeSynonymes(word)

		if (Synonymes === 'Not Found')
			return spinner.fail(`${r(`Word Synonymes not found!`)}`)

		const file = fs.createWriteStream(`${output}/${word}-Synonymes.txt`)

		file.on('error', err => {
			spinner.clear()
			spinner.fail(`${r(`Error writing file`)}`)
		})

		Synonymes.forEach(v => {
			file.write(v.trim() + '\n')
		})

		file.end()

		spinner.succeed(`${g(`✅ File created successfully.`)}`)
	} catch (error) {
		spinner.clear()
		console.log('\n')
		spinner.fail(`${r(`Error`)}`)
		console.log(error.message)
	}
}

module.exports = {
	getDefinitions,
	getSynonymes
}
