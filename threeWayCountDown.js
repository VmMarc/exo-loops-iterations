let min = 1
let max = 101
let step = 2




/*
for (let i = max; i >= min; i -= step) {
  console.log(i);
}
*/

/*
let i = max;
while (i > min) {
  console.log(i)
  i -= step
}
*/


let i = max;
do {
  console.log(i)
  i -= step
} while (i >= min)