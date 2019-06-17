const hrstart = process.hrtime()

for (let i=0; i<30; i++){
  console.log(fib(i))
}

const hrend = process.hrtime(hrstart)

console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)

function fib(n) {
  if(n > 1){
   return fib(n-1) + fib(n-2)
  } else {
   return n;
  }
 }