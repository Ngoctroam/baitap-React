const a = Math.floor(Math.random() * 20) + 1;
let b = 0
while (b < 5) {
  const answer = Number(prompt("Hãy đoán số từ 1 đến 20:"));
  if (answer === a) {
    console.log("Đoán đúng!");
    break;
  } else {
    console.log("Đoán sai.");
    b++;
    if (b === 5) {
      console.log("Bạn đã thua cuộc.");
    }
  }
}