const data = require('./data');
const {buildSynonymsList} = require('./synonyms');
const {getTrueFrequencies} = require('./frequencies');

const synonymsList = buildSynonymsList(data.synonymPairs);
const nameFrequencies = data.nameFrequencies;

const trueFrequencies = getTrueFrequencies(nameFrequencies, synonymsList);

console.log('%j', trueFrequencies);