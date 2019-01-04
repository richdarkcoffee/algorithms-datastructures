const yargs = require('yargs');

const argv = yargs
    .options({
        s: {
            demand: true,
            alias: 'steps',
            describe: 'Number of steps.',
            number: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

function countways(n,memo) {
    console.log(memo);
    if (memo == undefined) {
        tmpmemo = [0];
        return(countways(n,tmpmemo));
    }
    else {
        if (n < 0) {
            return 0;
        } else if (n == 0) {
            return 1;
        } else if (memo[n] > -1) {
            return memo[n];
        } else {
            memo[n]= countways(n - 1, memo) + countways (n - 2, memo) + countways (n - 3, memo);
            return memo[n];
        }
    }
}

console.log(countways(argv.steps));