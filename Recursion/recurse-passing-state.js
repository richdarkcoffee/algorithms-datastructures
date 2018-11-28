function quicksortBasic(array) {
    if (array.length < 2) {
        return array;
    } else {
        lesspivot = [];
        greaterpivot = [];
        finalarray = [];
        pivot = array[array.length/2];
        console.log(pivot);

        array.forEach(element => {
            if (element < pivot) lesspivot.push(element);
            if (element > pivot) greaterpivot.push(element);
        });
        finalarray = (quicksortBasic(lesspivot).concat([pivot])).concat(quicksortBasic(greaterpivot));
        console.log(finalarray);
        return finalarray;
    }
}

sortme = [4,5,2,10,12,3,4,7,9,13];

console.log(sortme);
console.log(quicksortBasic(sortme));


