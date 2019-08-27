const readProp = prop => obj => obj[prop]
const map = fn => xs => xs.map(fn)

const obj1 = { a: 'obj1 a', b: 'obj1 b'}
const obj2 = { a: 'obj2 a', b: 'obj2 b'}
const objs = [obj1, obj2]

const aReader = readProp('a')
const bReader = readProp('b')

const a = aReader(obj1) // 'obj1 a'
const aMap = map(aReader)
const onlyA = aMap(objs) // [ 'obj1 a', 'obj2 a' ]
const onlyB = map(bReader)(objs) // [ 'obj1 b', 'obj2 b' ]
