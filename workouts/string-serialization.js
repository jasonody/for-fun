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
///9:the fi,st11:2the sec$,d17:the long th,,d33,
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
//9:the fi,st11:2the sec$,d17:the long th,,d33,
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

//Using a delineator
const DELINEATOR = ',';
const ESCAPE_CHAR = '$';

//Write a function that takes a collection of strings and returns a single string
function serialize_with_delineator(strings) {
  let output = '';

  for (const string of strings) {
    const escaped = string.replace(new RegExp(DELINEATOR, 'g'), `${ESCAPE_CHAR}${DELINEATOR}`);
    output = `${output}${escaped}${DELINEATOR}`;
  }

  return output.slice(0, -1); //remove the trailing delineator
}

//Write a function that takes a the output from above and returns the original collection of strings
//the fi$,st,2the sec$$,d,the long th$,$,d33,,
function deserialize_with_delineator(input) {
  const strings = [];
  let string = '';
  let isEscaped = false;

  for (const char of input) {
    if (char === ESCAPE_CHAR) {
      if (isEscaped) {
        string = `${string}${char}`;
      } else {
        isEscaped = true;
      }
    } else if (char === DELINEATOR) {
      if (isEscaped) {
        string = `${string}${char}`;
        isEscaped = false;
      } else {
        strings.push(string);
        string = '';
      }
    } else {
      if (isEscaped) { //current char is not delineator so write escape char before current char
        string = `${string}${ESCAPE_CHAR}`;
        isEscaped = false;
      }
      string = `${string}${char}`;
    }
  }

  strings.push(string);

  return strings;
}

const strings = ['the fi,st', '2the sec$,d', 'the long th,,d33,'];

const serialized = serialize(strings);
console.log(serialized);
console.log(deserialize(serialized));
console.log(deserialize1(serialized));

const serialized_delineator = serialize_with_delineator(strings);
console.log(serialized_delineator);
console.log(deserialize_with_delineator(serialized_delineator));