let m, n;
do {
  m = Number(prompt("Nhập số m (m > 0):"));
} while (m <= 0);

do {
  n = Number(prompt("Nhập số n (n > 0):"));
} while (n <= 0);

let a = m;
let b = n;
while (b !== 0) {
  const i = b;
  b = a % b;
  a = i;
}
const boi = (m * n) / a;

console.log(`Bội chung nhỏ nhất của ${m} và ${n} là ${boi}`);