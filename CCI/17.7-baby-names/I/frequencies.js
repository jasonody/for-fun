module.exports.getTrueFrequencies = (nameFrequencies, synonymsList) => {
  const trueFrequencies = {};
  
  for (let name in nameFrequencies) {
    for (let i = 0; i < synonymsList.length; i++) {
      if (synonymsList[i].includes(name)) {
        const value = trueFrequencies[synonymsList[i][0]] == undefined ? 0 : trueFrequencies[synonymsList[i][0]]
  
        trueFrequencies[synonymsList[i][0]] = value + nameFrequencies[name];
        break;
      }
    }
  }

  return trueFrequencies;
}