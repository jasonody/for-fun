//Write a function that takes a collection of strings and returns a single string
function serialize(strings) {
  let output = '';

  for (const string of strings) {
    const length = string.length;
    output = `${output}${length}:${string}`;
  }

  return output;
}

//Write a function that takes a the output from above and returns the original collection of strings
//9:the first10:the second14:the long third
function deserialize(input) {
  const MODES = {
    READ_STRING: 'READ',
    PARSE_COUNT: 'COUNT'
  };

  const strings = [];
  let count = 0;
  let buffer = '';
  let mode = MODES.PARSE_COUNT;

  for (const char of input) {
    switch (mode) {
      case MODES.PARSE_COUNT:
        if (char !== ':') {
          count += char;
        } else {
          mode = MODES.READ_STRING;
        }
        break;
      
      case MODES.READ_STRING:
        buffer += char;
        count--;
        
        if (count === 0) {
          strings.push(buffer);
          buffer = '';
          mode = MODES.PARSE_COUNT;
        }
        break;
      
      default:
        throw new Error(`Unknown mode: ${mode}`);
    }
  }

  return strings;
}

//Write a function that takes a the output from above and returns the original collection of strings
//9:the first11:2the second17:the long third333
//          11111111112222222222333333333344444 
//012345678901234567890123456789012345678901234
function deserialize1(input) {
  const strings = [];
  let position = 0;

  while (position < input.length) {
    const splitterIndex = input.indexOf(':', position);
    const count = Number(input.substring(position, splitterIndex));
    const string = input.substring(splitterIndex + 1, splitterIndex + count + 1);
    strings.push(string);
    position = position + String(count).length + count + 1;
  }

  return strings;
}

const strings = ['the first', '2the second', 'the long third333'];

const serialized = serialize(strings);
console.log(serialized);

const deserialized = deserialize(serialized);
console.log(deserialize(serialized));
console.log(deserialize1(serialized));