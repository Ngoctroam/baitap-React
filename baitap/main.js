// Cho array sau: m = [1,2,4,5,6,7]; n = [3,5,675,8,96]. 
// Hãy viết một hàm, duyệt cả các mảng m và n; loại bỏ đi phần tử có giá trị bằng 1, 8,10,96,7.
let m = [1, 2, 4, 5, 6, 7];
let n = [3, 5, 675, 8, 96];
const giaTriCanLoaiBo = [1, 8, 10, 96, 7];

let ketQuaM = [];
for (let i = 0; i < m.length; i++) {
    if (!giaTriCanLoaiBo.includes(m[i])) {
        ketQuaM.push(m[i]);
    }
}

let ketQuaN = [];
for (let j = 0; j < n.length; j++) {
    if (!giaTriCanLoaiBo.includes(n[j])) {
        ketQuaN.push(n[j]);
    }
}

console.log("Mảng m sau khi loại bỏ:", ketQuaM);
console.log("Mảng n sau khi loại bỏ:", ketQuaN);
//Cho array 1 như sau: players = [
//     { id: 11, name: 'Messi', age: 33 },
//     { id: 12, name: 'Ronaldo', age: 34 },      
//     { id: 13, name: 'Young', age: 35 },        
//     { id: 14, name: 'Mane', age: 21 },          
//     { id: 15, name: 'Salah', age: 24 },
// ]
// Hãy chuyển đổi nó về array có dạng sau: playersModified = 
// { 
// 11: {id: 11, name: "Messi", age: 33},
// 12: {id: 12, name: "Ronaldo", age: 34},
// 13: {id: 13, name: "Young", age: 35},
// 14: {id: 14, name: "Mane", age: 21},
// 15: {id: 15, name: "Salah", age: 24}
// }.
var players = [
    { id: 11, name: 'Messi', age: 33 },
    { id: 12, name: 'Ronaldo', age: 34 },
    { id: 13, name: 'Young', age: 35 },
    { id: 14, name: 'Mane', age: 21 },
    { id: 15, name: 'Salah', age: 24 },
];

var playersModified = {};

for (var i = 0; i < players.length; i++) {
    var player = players[i];
    playersModified[player.id] = player;
}

console.log(playersModified);

