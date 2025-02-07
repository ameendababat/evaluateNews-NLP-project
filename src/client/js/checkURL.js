
const validurl = require('valid-url');

const isValidurl = (url) => Boolean(validurl.isWebUri(`${url}`));

module.exports = {
    isValidurl,
}












// function isValidUrl(url) {
//     const pattern = new RegExp(
//         '^(https?:\\/\\/)?' + // Protocol
//         '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // Domain name
//         '((\\d{1,3}\\.){3}\\d{1,3}))' + // IP address
//         '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // Port and path
//         '(\\?[;&a-z\\d%_.~+=-]*)?' + // Query
//         '(\\#[-a-z\\d_]*)?$', 'i' // Fragment
//     );

//     return !!pattern.test(url);
// }