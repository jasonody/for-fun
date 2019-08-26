const readProp = prop => obj => obj[prop]
const aReader = readProp('a')
const bReader = readProp('b')

const map = fn => xs => xs.map(fn)

const obj1 = { a: 'obj1 a', b: 'obj1 b'}
const obj2 = { a: 'obj2 a', b: 'obj2 b'}

const objs = [obj1, obj2]

const aMap = map(aReader)
const onlyA = aMap(objs)
const onlyB = map(bReader)(objs)

const zip = 