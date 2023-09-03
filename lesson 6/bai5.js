let a = Number(prompt('nhập a'));
console.log(a)
let b = Number(prompt('nhập b'));
console.log(b)
let x =Number(prompt('nhập x'));
console.log(x)
for (let i =a ; i <= b; i++) {

    if (i % x === 0) {
      console.log(`Số nhỏ nhất trong khoảng từ a đến ${b} chia hết cho ${x} là ${i}`);
      break; 
    }
  }

