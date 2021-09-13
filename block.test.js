// jest lib, keyword of jest lib called describe
// describe('name of block class', 'JS fun or call back fun it can run {} => {
    //setup variables and write tests around those variables

// }')
//const Block = require('./block')

// import Block from './block.js';
// import { GENESIS_DATA } from './config.js';
const Block = require('./block');
const { GENESIS_DATA } = require('./config');
// import Block, { genesis } from './block';
// import { GENESIS_DATA } from './config';

//setup a test using describe :Describe('name of the block class we are testing', () =>//a JS fun it can run//{
    //DECLARE VARIABLE FOR EVERY RELEVANT FIELD IN THE BLOCK CLASS
//};)
describe('Block', () => {
    const timestamp = 'a-data';
    const lastHash = 'foo-hase';
    const hash = 'bar-hash'; 
    const data = ['block', 'data'];
    const block = new Block({
        timestamp,
        lastHash,
        hash,
        data 
    });

    //to create a test we use it fun
    //it is very similar to describe fun takes string method as first argument and, 2nd call back fun ti run
    it('has a timestamp, lastHash, hash, and data property', () => {
        //learn more about TDD development
        //expect fun : takes one argument i.e. the value to test the value upon 
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });

    //2nd describe to describe another group of tests for the overall block test itself
    //static functions in JS
    //test for genesis() fun
    describe('genesis()', () => {
        //not on an instance of a block insted on the block class_name itself
        //here how are we gonna be able to call the genesis fun from the block class without creating an instance of the class yet, this is an example of calling a static function in JS
        const genesisBlock = Block.genesis(); 

        // console.log('genesisBlock : ', genesisBlock);

        it('returns a Block instance', () => {
            expect(genesisBlock instanceof Block).toEqual(true);
        });
    
        it('returns the genesis data', () => {
            //JS implements classes as objects under the hood
            expect(genesisBlock).toEqual(GENESIS_DATA);
        });
    });

    describe('mineBlock()', () => {
        //to mine a block this function should have a last block and some data to work with 
        const lastBlock = Block.genesis();
        const data = 'mined data';
        //so we have the mined block fun with it's object arguments consist of the last block and the data
        const minedBlock = Block.minedBlock({ lastBlock, data });
    
        if('returns a Block instance', () => {
            expect('minedBlock instance of Block').toBe(true);
        });
    
        //sets the lastHash variable 
        it('sets the `lastHash` to be the `hash` of the lastBlock', () => {
            expect(minedBlock.lastHash).toEqual(lastBlock.hash);
        });

        if('sets the `data`', () => {
            expect(minedBlock.data).toEqual(data);
        });
    
        it('sets a `timestamp`', () => {
            expect(minedBlock.timestamp).not.toEqual(undefined);
        });
    });
});
