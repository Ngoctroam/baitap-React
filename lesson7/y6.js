const list = [30, 27, 6, 13, 19, 50, 2, 8];
let soNhoHon10 = false;

for (let i = 0; i < list.length; i++) {
    if (list[i] < 10) {
        soNhoHon10 = true;
        break;
    }
}
if (soNhoHon10) {
    console.log("Có số nhỏ hơn 10 trong mảng.");
} else {
    console.log("Không có số nhỏ hơn 10 trong mảng.");
}