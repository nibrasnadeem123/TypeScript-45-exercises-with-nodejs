let array = [1,2,3,4,5,6,7,8,9]


for (let onenumber of array){
    let ordinal_number:string
    if(onenumber=== 1){
        ordinal_number="st"
    }else if(onenumber===2){
         ordinal_number="nd"
    }else if(onenumber===3){
        ordinal_number="rd"
    }else{
        ordinal_number="th"
    } 
    console.log(`${onenumber}${ordinal_number}`)
}
