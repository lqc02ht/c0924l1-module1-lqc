function solveQuadraticEquation() {
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    let c = parseFloat(document.getElementById("number3").value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("result").innerText = "Vui lòng nhập đầy đủ 3 số a, b, c!";
        return ;
    }
    if (a === 0) {
        document.getElementById("result").innerText = "Đây không phải là phương trình bậc hai, số a phải khác 0!";
        return ;
    }
    let delta = b*b - 4*a*c;
    if (delta < 0) {
        document.getElementById("result").innerText = "Phương trình vô nghiệm";
    } else if (delta === 0) {
        const x = -b / (2*a);
        document.getElementById("result").innerText = "Phương trình có nghiệm kép là: x = " + x;
    } else {
        const x1 = (-b - Math.sqrt(delta)) / (2*a);
        const x2 = (-b + Math.sqrt(delta)) / (2*a);
        document.getElementById("result").innerText = "Phương trình có nghiệm 2 nghiệm là x1 = " + x1 + " và x2 = " + x2;
    }
}