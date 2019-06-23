module.exports.getTrueFrequencies = (frequencies, synonyms) => {
  const trueFrequencies = {};
  
  for (let name in frequencies) {
    const key = synonyms[name] && synonyms[name].length ? synonyms[name][0] : name;
    const base = trueFrequencies[key] || 0;

    trueFrequencies[key] = base + frequencies[name];
  }

  return trueFrequencies;
}