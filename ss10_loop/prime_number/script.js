let n = +prompt("Nhập vào số nguyên dương n (màn hình sẽ hiển thị ra n số nguyên tố đầu tiên):");

if (isNaN(n) || n <= 0) {
    while (isNaN(n) || n <= 0) {
        n = +prompt("Vui lòng nhập lại:");
    }
}

let result = 2;
let count = 0;
while(count < n) {
    if (checkPrime(result)) {
        document.write(`${result}` + "<br>");
        count ++;
    }
    result ++;
}

function checkPrime(uncheck) {
    let count = 0;
    for (let i = 1; i <= uncheck; i++) {
        if ((uncheck % i) === 0) {
            count ++;
        }
        if (count > 2) {
            break;
        }
    }
    if (count === 2) {
        return 1;
    } else {
        return 0;
    }  
}

