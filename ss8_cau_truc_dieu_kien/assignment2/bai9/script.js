function checkRectangle() {
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    let c = parseFloat(document.getElementById("number3").value);
    if (a <= 0 || b <= 0 || c <= 0) {
        document.getElementById("result").innerText = "Cạnh của 1 tam giác phải lớn hơn 0!";
        return ;
    }
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("result").innerText = "Vui lòng nhập đủ 3 cạnh của tam giác!";
        return ;
    }
    if (a + b <= c || b + c <= a || c + a <= b) {
        document.getElementById("result").innerText = "3 số a, b, c không phải là cạnh của một tam giác.";
    } else {
        document.getElementById("result").innerText = "3 số a, b, c là các cạnh của một tam giác.";
    }
}