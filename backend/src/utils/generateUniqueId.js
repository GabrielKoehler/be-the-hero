const crypto = require('crypto');

module.exports = function generateUniqueId() {
  const randonUniqueId = crypto.randomBytes(4).toString('HEX'); 
  return randonUniqueId;
}