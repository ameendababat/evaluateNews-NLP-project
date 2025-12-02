
const validurl = require('valid-url');

const isValidurl = (url) => Boolean(validurl.isWebUri(`${url}`));

module.exports = {
    isValidurl,
}