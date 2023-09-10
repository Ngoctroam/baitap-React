let n = Number(prompt("Nhập số n (n >= 2):"));// hiển thị trên màn hình 
let sum = 0; // khởi tạo biến sum với giá trị bằng 0
// vòng lặp for bắt đầu từ 1 đến nhỏ hơn hoặc =n,i++ tăng dần lên
  for (let i = 1; i <= n; i++) {
    sum += 1 / (i * (i + 1));
  }

  console.log(`Giá trị của biểu thức S là: ${sum}`);
