let d1 = prompt('Nhập d1');
let d2 = prompt('Nhập d2');
// console.log(d1);
// console.log(d2);
const d1Array = d1.split(',');
const d2Array = d2.split(',');
console.log(d1Array);
console.log(d2Array);
// let flag= true;
// for (let e of d1Array){
//     console.log(e);
//     if(d2Array.includes(e)===false){
//         flag=false;
//         break;
//     }
// }
// if(flag==true){
//     console.log('Các phần tử d1 đều nằm trong d2');
// }
// else{
//     console.log('Có phần tử d1 không nằm trong d2');
// }
// let sumd1=0;
// for(let element of d1Array){
//     sumd1=sumd1+Number(element);
// }
// let flag2=flase;
// for(let element of d2Array){
//     if(element% sumd1==0){
//         flag2=true;
//         break;
//     }
// }
// if(flag2===flag){
//     console.log('Không có phần tử nào trong d2 chia hết cho d1');

// }else{
//     console.log('Kiểm tra xem có phần tử nào trong d2 chia hết cho d1 không');
// }
// const array=d2.concat(d1);
// const divide2=[];