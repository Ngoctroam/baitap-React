function tamGiac(a,b,c){
    if(a>0 && b>0 && c>0){
    if(a+b>c && a+c>b && c+b>a){
        return true;
    }
    else{
        return false;
    }
    }
}
    console.log(tamGiac(3, 4, 6));