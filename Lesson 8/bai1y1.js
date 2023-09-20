function giaiPhuongTrinhBacHai(a, b, c) {
    var delta = b * b - 4 * a * c;
    var nghiem = [];
    if (delta > 0) {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        nghiem.push(x1, x2);
    } else if (delta === 0) {
        var x = -b / (2 * a);
        nghiem.push(x);
    }
    return nghiem;
}

console.log(giaiPhuongTrinhBacHai(1, -3, 2))