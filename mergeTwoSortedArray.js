const mergeSortedArray = (array1, array2) => { 
    const mergedArray = [];
    array1Item = array1[0];
    array2Item = array2[0];
    i = 1;
    j = 1;

    if(array1.length === 0){
        return array2;
    }
    if(array2.length === 0){
        return array1
    }

    while(array1Item || array2Item){
        if(array2Item == undefined || array1Item < array2Item){
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } 
        else{
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray
}

console.log(mergeSortedArray([0,3, 3,4,31], [3,4,6,30]))