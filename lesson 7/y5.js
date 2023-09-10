const list = [30, 27, 6, 13, 19, 50, 2, 8];
let count =list[0];
for(let i =1; i<list.length;i++){
if(list[i]%1===0){
    count+=1;
}
}
if(count===2){

console.log("Số Nguyên tố là");
}