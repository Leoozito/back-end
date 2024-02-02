const numeroMenores = (num1, num2) => {
    if (num1 < 10 || num2 < 10) {
        console.log(num1 * num2)
    } else {
        console.log("Apenas números abaixo de 10")
    }
}

numeroMenores(9, 9)