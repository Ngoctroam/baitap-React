let n = Number(prompt("Nhập vào số n:"));
let uoc = 0; 

for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    uoc++;
  }
}

console.log(uoc);