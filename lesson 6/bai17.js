let w = prompt("cân nặng");
let h= prompt(" Chiều cao");
let BMI=w/(h*h);
console.log('BMI', BMI);
if(BMI <18.5){
    console.log('Nhẹ cân');
}
else if(BMI <23 && BMI >= 18.5){
console.log('bình thường');
} else if (BMI >=23 && BMI <25){
    console.log('thừa cân');
}else{
    console.log('Béo phì');
}