let n;
do {
  n = Number(prompt("Nhập số n (n >= 2):"));
} while (isNaN(n) || n < 2);
let i = 1;
do {
  let j = 1;
  do {
    console.log("* ");
    j++;
  } while (j <= n);
  console.log();
  i++;
} while (i <= n);