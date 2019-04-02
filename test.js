const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();
const Fortune = require('./models/fortune');

describe('Fortune model', () => {
    it('should be able to grab a written fortune and luck numbers', async () => {
        const fortunesCook = await Fortune.getAll();
        expect(fortunesCook).to.be.instanceOf(Array);
    })
    
})