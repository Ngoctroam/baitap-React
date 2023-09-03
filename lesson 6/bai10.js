let m, n;
do {
  m = Number(prompt("Nhập số m (m > 0):"));
} while (m <= 0);

do {
  n = Number(prompt("Nhập số n (n > 0):"));
} while (n <= 0);

while (m !== n) {
  if (m > n) {
    m -= n;
  } else {
    n -= m;
  }
}

console.log(`Ước chung lớn nhất là ${m}`);