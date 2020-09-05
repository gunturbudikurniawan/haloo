function insertion(angka){
    for(let i=0;i<angka.length;i++){
        console.log(angka[i],"ini i");
        let insert=i
        for(let j=insert;j>=0;j--){
            console.log(angka[j-1],"ini j");
            if(angka[j]<angka[j-1]){ 
                let temp=angka[j]
                angka[j]=angka[j-1]
                angka[j-1]=temp
            }
        }
    }
    return angka
}

console.log(insertion([2,5,1,2,1,2]));
