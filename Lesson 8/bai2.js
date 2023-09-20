let users = [
    {
        "id": 1,
        "first_name": "Kenton",
        "last_name": "Samples",
        "email": "ksamples0@washingtonpost.com",
        "gender": "Male",
        "age": 35,
        "job": "Worker",
        "country": "UK",
        "is_married": false
    }, {
        "id": 2,
        "first_name": "Marc",
        "last_name": "Jurries",
        "email": "mjurries1@flavors.me",
        "gender": "Female",
        "age": 54,
        "job": "Teacher",
        "country": "Vietnam",
        "is_married": false
    }, {
        "id": 3,
        "first_name": "Bruis",
        "last_name": "McBeath",
        "email": "bmcbeath2@cam.ac.uk",
        "gender": "Female",
        "age": 59,
        "job": "Developer",
        "country": "UK",
        "is_married": false
    }, {
        "id": 4,
        "first_name": "Kennett",
        "last_name": "Lammert",
        "email": "klammert3@sun.com",
        "gender": "Female",
        "age": 22,
        "job": "Dentist",
        "country": "Vietnam",
        "is_married": false
    }, {
        "id": 5,
        "first_name": "Feodora",
        "last_name": "Clemot",
        "email": "fclemot4@craigslist.org",
        "gender": "Female",
        "age": 46,
        "job": "Dentist",
        "country": "Vietnam",
        "is_married": false
    }, {
        "id": 6,
        "first_name": "Betta",
        "last_name": "Bittlestone",
        "email": "bbittlestone5@digg.com",
        "gender": "Female",
        "age": 15,
        "job": "Project Manager",
        "country": "Russia",
        "is_married": true
    }
]
    function timNguoiDungTheoID(n) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].id === n) {
                return users[i]; 
            }
        }
        return null; 
    }
    var n = 5;
    var nguoiDung = timNguoiDungTheoID(n);
    if (nguoiDung) {
        console.log("Người dùng có ID " + n + " là:", nguoiDung);
    } else {
        console.log("Không tìm thấy người dùng có ID " + n);
    }
    function layEmailTheoKeyword(keyword) {
        var danhSachEmail = [];
        
        for (var i = 0; i < users.length; i++) {
            var tenDayDu = users[i].first_name + " " + users[i].last_name;
            
            if (tenDayDu.toLowerCase().includes(keyword.toLowerCase())) {
                danhSachEmail.push(users[i].email);
            }
        }
        
        return danhSachEmail;
    }
    
    var keyword = "Bruis";
    
    var danhSachEmail = layEmailTheoKeyword(keyword);
   
    if (danhSachEmail.length > 0) {
        console.log("Danh sách email của các người dùng có tên chứa keyword '" + keyword + "':");
        console.log(danhSachEmail);
    } else {
        console.log("Không tìm thấy người dùng nào có tên chứa keyword '" + keyword + "'.");
    }
    function demNguoiDungCoAgeLonHon50() {
        var soLuong = 0;
    
        for (var i = 0; i < users.length; i++) {
            if (users[i].age > 50) {
                soLuong++;
            }
        }
    
        return soLuong;
    }
    var soLuongNguoiDung = demNguoiDungCoAgeLonHon50();
    console.log("Số lượng người dùng có age > 50 là:", soLuongNguoiDung);
    