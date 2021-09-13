// import { GENESIS_DATA } from './config.js';
const { GENESIS_DATA } = require('./config');

        //within the constrctot we take the incoming values
        //and set a propertyon the class for each value
        //to set a property on the instance of a class we use this keyword
class Block {
    constructor({ timestamp, lastHash, hash, data }) { //not wrapping arguments in a JS object
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    static genesis() {
        //return an instance of Block class
        //factory method (where fun creating/using instances of a class without using the constructor method)
        return new this(GENESIS_DATA);
    }

    //take obj as arguments
    //So now we have this static minedBlock fun, which would create a block based on the last block and new data. And this is going to be extremly useful as you develop the blockchain

    //also to set a proper hash, we are gonna need to creat a generic hashing function that can generate a unique hash value based on the incoming requests.
    static minedBlock({ lastBlock, data }){
        return new this({
            timestamp: Date.now(), 
            lastHash: lastBlock.hash, 
            data
        });
    }
}

module.exports = Block;
// export default Block;

// const block1 = new Block({
//     timestamp: '01/01/01', 
//     lastHash: 'foo-lastHast', 
//     hash: 'foo-hash', 
//     data: 'foo-data'
// });

// console.log('block1\n', block1);

//adopt a TDD approach : approach in programming to test everything. only catch is we write the tests first.
//Write the code to get the tests to pass.
//keep writing until all tests pass
//kinda backward code format

