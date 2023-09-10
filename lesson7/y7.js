const list = [30, 27, 6, 13, 19, 50, 2, 8];
let tatCaLonHon20 = true;
for (let i = 0; i < list.length; i++) {
    if (list[i] <= 20) {
        tatCaLonHon20 = false;
        break;
    }
}
if (tatCaLonHon20) {
    console.log("Tất cả các phần tử trong mảng đều lớn hơn 20.");
} else {
    console.log("Không có phần tử lớn hơn 20.");
}