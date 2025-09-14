const n = parseInt(process.argv[2], 10);

function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}

if (Number.isNaN(n)) {
    console.log(1);
} else {
    console.log(factorial(n));
}
