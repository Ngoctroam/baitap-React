const list = [30, 27, 6, 13, 19, 50, 2, 8];
let tong = 0;
for (let i = 0; i < list.length; i++) {
    tong += list[i];
}
const giaTriTrungBinh = tong / list.length;

console.log(giaTriTrungBinh);