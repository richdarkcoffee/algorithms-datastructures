const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'array',
            describe: 'Array of numbers.',
            array: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;
    
function quicksortBasic(array) {
    if (array.length < 1) {
        return array;
    } else if (array.length === 2) {
        if (array[0] < array[1]) return array;
        else {
            tmp = array[0];
            array[0] = array[1];
            array[1] = tmp;
        }
    } else {
        var sortPivot = array[1];
        lesspivot = [];
        greaterpivot = [];
        finalarray = [];
        for (x=0;x<array.length;x++) {
            if (array[x] < sortPivot) lesspivot.push(array[x]);
            if (array[x] > sortPivot) greaterpivot.push(array[x]);
        }
        console.log(`LESS: ${lesspivot} - PIVOT: ${sortPivot} - GREATER: ${greaterpivot}`); 
        return [].concat(quicksortBasic(lesspivot),sortPivot,quicksortBasic(greaterpivot));
    }
}

console.log(argv.array);
console.log(quicksortBasic(argv.array));