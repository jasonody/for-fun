const hrstart = process.hrtime()

const fibo = fib()
for (let i=0; i<30; i++){
  console.log(fibo())
} 

const hrend = process.hrtime(hrstart)

console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)

function fib() {
  let x = 0
  let y = 1
  return function () {    
    const temp = x
    x = x + y
    y = temp
    return y
  }
}
