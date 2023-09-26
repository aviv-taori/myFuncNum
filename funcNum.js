const a = [9,2,2,1,3,3,4,4,2,3,1,4,5,5,5,1,66,66,66,9];

function findNum(myList){
    let myXor = 0;
    let emptyList = [];
    for (let i = 0; i < myList.length; i++){
        if (! emptyList.includes(myList[i])){
            emptyList.push(myList[i]);
            myXor = myXor ^ myList[i];
        } 
        myXor = myXor ^ myList[i];
        }
        return myXor
    }
console.log(findNum(a))
