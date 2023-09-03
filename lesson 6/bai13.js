let n;
do {
  n = Number(prompt("Nhập số n (2 <= n <= 10):"));
} while (isNaN(n) || n < 2 || n > 10);
let i = 1;
do {
  let a = n * i;
  console.log(`${n} x ${i} = ${a}`);
  i++;
} while (i <= 10);




