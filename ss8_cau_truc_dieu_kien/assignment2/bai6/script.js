function solveFirstEquation() {
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    let x = 0;
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Vui lòng nhập đầy đủ 2 số a, b!";
        return ;
    }
    if (a === 0) {
        if (b === 0) {
            document.getElementById("result").innerText = "Phương trình có vô số nghiệm";
        } else {
            document.getElementById("result").innerText = "Phương trình vô nghiệm";
        }
    } else {
        x = -b/a;
        document.getElementById("result").innerText = "Phương trình có nghiệm là: x = " + x;
    }
}