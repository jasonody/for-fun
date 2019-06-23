const data = require('./data');
const {buildSynonymsList} = require('./synonyms');
const {getTrueFrequencies} = require('./frequencies');

const hrstart = process.hrtime();

const synonyms = buildSynonymsList(data.synonymPairs);
const trueFrequencies = getTrueFrequencies(data.nameFrequencies, synonyms);

const hrend = process.hrtime(hrstart);
console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);

console.log('%j', trueFrequencies);