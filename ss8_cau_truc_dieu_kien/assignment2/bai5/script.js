function count() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("result").innerText = "Vui lòng nhập đầy đủ 2 cạnh a, b!";
        return ;
    }
    if (number1 < 0 || number2 < 0) {
        document.getElementById("result").innerText = "Cạnh hình tam giác không thể là số âm!";
        return ;
    }
    let area = (number1*number2)/2;
    document.getElementById("result").innerText = "Diện tích tam giác vuông: " + area;
}