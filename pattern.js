for(let i=0;i<5;i++){
    let str = " ";
    for(let j=0;true;j++){
        str += "*";
        if(j==i){
            break;
        }
    }
    console.log(str);
}