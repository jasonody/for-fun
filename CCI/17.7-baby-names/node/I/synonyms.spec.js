const buildSynonymsList = require('./synonyms').buildSynonymsList;
const data = require('./data');
const chai = require('chai');

describe('buildSynonymsList', () => {
  it('will build the list', () => {
    const synonymsList = buildSynonymsList(data.synonymPairs);
    
    const expectedSynonymsList = [
      ['Jon', 'John', 'Jonny'],
      ['Chris', 'Kris', 'Christopher']
    ];
    
    chai.expect(synonymsList).to.be.deep.equal(expectedSynonymsList);
  });
})