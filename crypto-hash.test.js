const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {
    //ensure that this fun produces SHA output rather SHA256
    //google it : SHA256 gebnerator online
    it('generates a SHA-256 hashed output', () => {
        expect(cryptoHash('foo')).toEqual('2c26b46b6bffc68ff99b53c1db0413413422d706483bfa0f98a5e886266e7ae');
    });

    if('it produces the same hash with the same arguments in any order', () => {
        expect(cryptoHash('one', 'two', 'three')).toEqual(cryptoHash('three', 'two', 'one'));
    });
});