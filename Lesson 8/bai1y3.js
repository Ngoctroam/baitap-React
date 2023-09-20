function time(day,month,year){
    if (
        Number.soNguyen(day) &&
        Number.soNguyen(month) &&
        Number.soNguyen(year) &&
        day > 0 &&month >= 1 && month <= 12 &&year >= 1
    ) {
        var ngayToiDaTrongThang = new Date(year, month, 0).getDate();
        
        if (day <= ngayToiDaTrongThang) {
            return true
        }
    }

    return false;
}


console.log(time(31, 12, 2022)); 
console.log(time(29, 2, 2024)); 
console.log(time(30, 2, 2023)); 
console.log(time(15, 4, 2023)); 
console.log(time(0, 5, 2023)); 