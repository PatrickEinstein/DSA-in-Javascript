import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Input the number here :", (data) => {
    console.log(` the factorial of ${data} is ${factorial(parseInt(data))}`)
    rl.close()
})






const factorial = (n) => {
    let factorialSnl = 1
    if (n < 2) {
        factorialSnl = 1
    } else {
        factorialSnl = n * factorial(n - 1)
    }

    return factorialSnl
}

