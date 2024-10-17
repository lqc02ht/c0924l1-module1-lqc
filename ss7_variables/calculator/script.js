function calculate(operation) {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let result = 0;

    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("result").innerText = "Please enter valid numbers!";
        return;
    }

    switch (operation) {
        case 'add':
            result = number1 + number2;
            document.getElementById("result").innerText = "Result Addition: " + result;
            break;
        case 'sub':
            result = number1 - number2;
            document.getElementById("result").innerText = "Result Subtraction: " + result;
            break;
        case 'mul':
            result = number1 * number2;
            document.getElementById("result").innerText = "Result Multiplication: " + result;
            break;
        case 'div':
            if (number2 === 0) {
                document.getElementById("result").innerText = "Division by zero is not allowed!";
            } else {
                result = number1 / number2;
                document.getElementById("result").innerText = "Result Division: " + result;
            }
            break;
        default:
            document.getElementById("result").innerText = "Invalid operation!";
            break;
    }
}