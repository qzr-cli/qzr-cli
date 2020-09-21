const tplObj = require(`${__dirname}/../template`)
const utils = {}

utils.findOne = (name) => {
  for (const item of tplObj.ls) {
    if(item.name === name) return item
  }

  return false
}

module.exports = utils