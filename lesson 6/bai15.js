let m, n;
do {
  m = Number(prompt("Nhập chiều rộng:"));
} while (isNaN(m) || m < 2);

do {
  n = Number(prompt("Nhập chiều cao :"));
} while (isNaN(n) || n < 2);

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < m; j++) {
    row += "* ";
  }
  console.log(row);
}