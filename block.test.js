//jest lib, keyword of jest lib called describe
// describe('name of block class', 'JS fun or call back fun it can run {} => {
    //setup variables and write tests around those variables

// }')
import Block from './block.js';
import { GENESIS_DATA } from './config.js';

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
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });

    //2nd describe to describe another group of tests for the overall block test itself
    //static functions in JS
    describe('genesis()', () => {
        const genesisBlock = Block.genesis(); 

        it('returns a Block instance', () => {
            expect(genesisBlock instanceof Block).toEqual(true);
        });
    
        it('returns the genesis data', () => {
            expect(genesisBlock).toEqual(GENESIS_DATA);
        });
    });
});
