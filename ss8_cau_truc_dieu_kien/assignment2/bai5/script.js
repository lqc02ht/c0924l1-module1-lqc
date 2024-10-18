function count() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("result").innerText = "Vui lòng nhập đầy đủ 2 số a, b!";
        return ;
    }
    if (number1 === 0) {
        document.getElementById("result").innerText = "Phương trình vô nghiệm!";
        return ;
    } else if (number2 === 0) {

    }
    let area = (number1*number2)/2;
    document.getElementById("result").innerText = "Diện tích hình tam giác: " + area;
}