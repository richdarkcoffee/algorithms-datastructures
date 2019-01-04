function quicksortBasic(array) {
    if (array.length < 2) {
        console.log(`Length: ${array.length}`);
        return array;
    } else if (array.length == 2) {
        if (array[0] < array [1]) return array;
        else {
            tmp  = array[0];
            array[0] = array[1];
            array[1] = tmp;
            console.log('Swapped array elements.')
            return array;
        }
    } else {
        lesspivot = [];
        greaterpivot = [];
        finalarray = [];
        pivot = array[1];
        console.log(`Length: ${array.length}`);

        array.forEach(element => {
            if (element < pivot) lesspivot.push(element);
            if (element > pivot) greaterpivot.push(element);
        });
        console.log(`LESS: ${lesspivot} PIVOT: ${pivot} - GREATER: ${greaterpivot}`)
        if (greaterpivot.length > 0) var returngreater = quicksortBasic(greaterpivot);
        if (lesspivot.length > 0 ) var returnless = quicksortBasic(lesspivot);
        var finalarray = [].concat(returnless,pivot,returngreater);
        console.log(`${finalarray}`);
        return finalarray;
    }
}

sortme = [5,20,4,2,10,3,12,1,7,9,13];

console.log(sortme);
console.log(quicksortBasic(sortme));


