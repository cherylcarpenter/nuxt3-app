const fs = require('fs')
const path = require('path')

const parseMarkdown = require('front-matter-markdown')
/**
 * getFiles - Get list of files in directory
 * @param {string} dir
 * @returns {Array} Array of objects``
 */
const getPage = (page) => {
  const markdownFile = fs.readFileSync(`content/pages/${page}`, 'utf-8')
  const fileContents = parseMarkdown(markdownFile)

  return fileContents
}

/**
 * Write blogs json file
 */

const writeHome = async () => {
  const fileHome = await getPage('home.md')

  function jsonOut(name, data) {
    fs.writeFileSync(
      path.resolve(__dirname, `../content/pages/${name}.json`),
      JSON.stringify(data)
    )
  }
  return jsonOut('home', fileHome)
}

writeHome()
