const buildSynonymsList = require('./synonyms').buildSynonymsList;
const data = require('./data');
const chai = require('chai');

describe('buildSynonymsList', () => {
  it('will build the list', () => {
    const synonymsList = buildSynonymsList(data.synonymPairsExtended);
    
    const expectedSynonymsList = {
      Jon: ['Jon', 'John', 'Jonny', 'Jonathan', 'Jonathon'],
      John: ['Jon', 'John', 'Jonny', 'Jonathan', 'Jonathon'],
      Jonny: ['Jon', 'John', 'Jonny', 'Jonathan', 'Jonathon'],
      Jonathan: ['Jon', 'John', 'Jonny', 'Jonathan', 'Jonathon'],
      Jonathon: ['Jon', 'John', 'Jonny', 'Jonathan', 'Jonathon'],
      Chris: ['Chris', 'Kris', 'Christopher'],
      Kris: ['Chris', 'Kris', 'Christopher'],
      Christopher: ['Chris', 'Kris', 'Christopher']
    }
    
    chai.expect(synonymsList).to.be.deep.equal(expectedSynonymsList);
  });
})