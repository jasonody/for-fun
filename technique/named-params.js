function someFunc ({a, b, c}) {
  console.log(`a:${a}; b:${b}; c:${c}`);
}

console.log('---someFunc---')
someFunc({a: 'a', b: 'b', c: 'c'});
someFunc({});
//someFunc(); //runtime error: param cannot be optional

//--------------------

function someFuncWithOptionalParam ({a, b, c} = {}) {
  console.log(`a:${a}; b:${b}; c:${c}`);
}

console.log('\n---someFuncWithOptionalParam---')
someFuncWithOptionalParam({a: 'a', b: 'b', c: 'c'});
someFuncWithOptionalParam({});
someFuncWithOptionalParam();

//--------------------

function someFuncWithOptionalParamAndDefaultValues ({a = 'default-a', b = 'default-b', c = 'default-c'} = {}) {
  console.log(`a:${a}; b:${b}; c:${c}`);
}

console.log('\n---someFuncWithOptionalParamAndDefaultValues---')
someFuncWithOptionalParam({a: 'a', b: 'b', c: 'c'});
someFuncWithOptionalParamAndDefaultValues({});
someFuncWithOptionalParam();