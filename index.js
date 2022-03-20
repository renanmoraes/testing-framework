let number = 45//10000000000;
let modelInit = 'perfformed' // perfformed || normal
let iterable = 2;
let dividers = [];
let primeNumbers = [];
console.time("#Time Testing");

function isPrime(number) {
    for (let i = 2; i < number; i++)
        if (number % i === 0)
            return false
    return number >= 1;
}

if (modelInit === "perfformed") {
    for (let i = 1; i < (Number(Math.sqrt(number))) + 1; i++) {
        if (number % i == 0) {
            iterable += i === 1 ? 0 : ((number / i == i) ? 1 : 2);
            if (isPrime(i))
                primeNumbers.push(i)
        }
    }
    console.timeEnd("#Time Testing");
    console.log(`Número de entrada: ${number} \nNúmero de divisores: ${iterable} \nNúmeros primos: ${primeNumbers.toString()}`);
} else {
    for (let i = 1; i < Number(number) + 1; i++) {
        if (number % i == 0) {
            dividers.push(i);
            if (isPrime(i))
                primeNumbers.push(i)
        }
    }
    console.timeEnd("#Time Testing");
    console.log(`Números de entrada: ${number} \nNúmeros de divisores: ${dividers.toString()} \nNúmeros primos: ${primeNumbers.toString()}`);
}
