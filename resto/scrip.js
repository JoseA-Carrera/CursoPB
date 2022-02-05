// EJECUCION POR DOCUMENT.WRITE

for (let num = 1; num <= 100; num++) {
    if (num % 3 == 0 && num % 5 == 0) {
        document.write(`${num} FizzBuzz <br>`)
    } else if (num % 3 == 0) {
        document.write(`${num} Fizz <br>`);
    } else if (num % 5 == 0) {
        document.write(`${num} Buzz <br>`);
    } else {
        document.write(num + "<br>");
    }
}

// EJECUCION POR CONSOLA

// for (let num = 1; num <= 100; num++) {
//     if (num % 3 == 0 & num % 5 == 0) {
//         console.log(num, "FizzBuzz")

//     } else if (num % 3 == 0) {
//         console.log(`${num} Fizz`);

//     } else if (num % 5 == 0) {
//         console.log(num, "Buzz");

//     } else {
//         console.log(num);

//     }
// }