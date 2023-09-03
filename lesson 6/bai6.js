let n = Number(prompt("Nhập số n (n >= 2):"));
let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / (i * (i + 1));
  }

  console.log(`Giá trị của biểu thức S là: ${sum}`);
