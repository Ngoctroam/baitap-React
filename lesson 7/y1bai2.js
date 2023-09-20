const s = ["ab", "abc", "abcd", "abcde", "abcdef"];


let chuoiNhoNhat = s[0];

for (let i = 1; i < s.length; i++) {
    if (s[i].length < chuoiNhoNhat.length) {
        chuoiNhoNhat = s[i];
    }
}

console.log(chuoiNhoNhat);