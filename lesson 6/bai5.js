let a = Number(prompt('nhập a'));
console.log(a) // đưa giá trị ra màn hình
let b = Number(prompt('nhập b'));
console.log(b)
let x =Number(prompt('nhập x'));
console.log(x)
//Khởi tạo vòng lặp từ a->b
for (let i =a ; i <= b; i++) {

    if (i % x === 0) {// xét xem chia hết cho X  chia lấy dư
      console.log(`Số nhỏ nhất trong khoảng từ a đến ${b} chia hết cho ${x} là ${i}`);
      break; // xét giá trị đầu tiên chia hết cho x sẽ dừng vòng lặp
    }
  }

