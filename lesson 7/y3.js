const list = [30, 27, 6, 13, 19, 50, 2, 8];
let soChiaHetCho3=[];
for(let i=0; i<list.length;i++){
    if(list[i]%3===0){
        soChiaHetCho3.push(list[i]);
    }
}
let max =soChiaHetCho3[0];
for (let i=0 ; i<soChiaHetCho3.length;i++){
if(soChiaHetCho3[i]> max){
    max=soChiaHetCho3[i];
}
console.log(max);
}