let n = Number(prompt("Nhập n:"));
let songuyen = true; 
if (n <= 1) {
    isPrime = false; 
  } else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      songuyen = false; 
    }
  }
}
  if (songuyen) {
    console.log(`${n} là số nguyên tố`);
  } else {
    console.log(`${n} không phải là số nguyên tố`);
  }






