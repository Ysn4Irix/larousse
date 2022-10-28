const axios = require('axios')
const cheerio = require('cheerio')

/**
 *
 * @param {string} word
 * @returns {Promise<Array>}  A list containing all the definitions of word
 */
const scrapeDefinitions = async word => {
	const { data } = await axios.get(
		`https://larousse.fr/dictionnaires/francais/${word}`,
		{
			headers: {
				'User-Agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
			}
		}
	)

	const $ = cheerio.load(data)
	if ($('body > div > section > h1').text().includes('Suggestions proposées'))
		return 'Not Found'

	const elementSelector = '#definition > article > ul:nth-child(2) > li'

	let definitions = []
	$(elementSelector).each((index, element) => {
		const splitter = $(element).text().split('.')
		const first = `${splitter[0]} => ${splitter[1].trim()}`
		definitions.push(first.split(':')[0])
	})

	return definitions
}

/**
 *
 * @param {string} word
 * @returns {Promise<Array>}  A list containing all the synonymes of word
 */
const scrapeSynonymes = async word => {
	const { data } = await axios.get(
		`https://larousse.fr/dictionnaires/francais/${word}`,
		{
			headers: {
				'User-Agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
			}
		}
	)

	const $ = cheerio.load(data)
	if ($('body > div > section > h1').text().includes('Suggestions proposées'))
		return 'Not Found'

	const elementSelector = '#definition > article > ul:nth-child(2) > li'
	return $(elementSelector).children('p.Synonymes').text().split('-')
}

module.exports = {
	scrapeDefinitions,
	scrapeSynonymes
}
