module.exports.buildSynonymsList = (listOfPairs) => {
  const synonyms = {};

  listOfPairs.forEach(pair => {
    //this is fastest
    const names = pair.split(',');
    const first = names[0],
      second = names[1];
    
    //this is slower
    //const names = pair.split(',');
    //const [first,second] = names;
    
    //this is even slower
    //const [first,second] = names = pair.split(',');

    if (!synonyms[first] && !synonyms[second]) {
      synonyms[first] = synonyms[second] = names;
    } else if (synonyms[first] && !synonyms[second]) {
      synonyms[first].push(second);
      synonyms[second] = synonyms[first];
    } else if (!synonyms[first] && synonyms[second]) {
      synonyms[second].push(first);
      synonyms[first] = synonyms[second];
    } else {
      synonyms[first].forEach(synonym => {
        synonyms[synonym] = synonyms[second];
        synonyms[second].push(synonym);
      });
    }
  });

  return synonyms;
}