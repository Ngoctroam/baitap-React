const list = [30, 27, 6, 13, 19, 50, 2, 8];
let soChiaHetCho2=[];
for(let i=0; i<list.length;i++){
    if(list[i]%2===0){
        soChiaHetCho2.push(list[i]);
    }
}
let min =soChiaHetCho2[0];
for (let i=0 ; i<soChiaHetCho2.length;i++){
if(soChiaHetCho2[i]< min){
    min=soChiaHetCho2[i];
}
console.log(min);
}