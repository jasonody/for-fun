module.exports.buildSynonymsList = (listOfPairs) => {
  const synonymsList = [];

    listOfPairs.forEach((pair) => {
      const names = pair.split(',')
      let matched = false;
    
      for (let namesIndex = 0; namesIndex < names.length && !matched; namesIndex++) {
        for (let synonymsListIndex = 0; synonymsListIndex < synonymsList.length && !matched; synonymsListIndex++) {
          if (synonymsList[synonymsListIndex].includes(names[namesIndex])) {
            synonymsList[synonymsListIndex].push(names[namesIndex ? 0 : 1]);
            matched = true;
          }
        }
      }

      if (!matched) {
        synonymsList.push(names)
      }
    });

  return synonymsList;
}