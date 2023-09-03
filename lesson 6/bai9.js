let s = prompt("Nhập chuỗi s (chỉ gồm chữ số):");
let l = Number(prompt("Nhập số l:"));

while (s.length < l) {
  s = '0' + s; 
}

console.log(`Chuỗi mới sau khi thêm '0': ${s}`);