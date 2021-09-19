const crypto = require('crypto');

//we can never know the numbee of parameters/arguments, so we take adv of JS spread operator
const cryptoHash = (...inputs) => {
    const hash = crypto.createHash('sha256');

    //the hash obj has an update fun that takes a string argument that will generate a relevant hash value within the obj itself
    hash.update(inputs.join(' '));

    return hash.digest('hex');
};

module.exports = cryptoHash;