function convert() {
    let c = parseFloat(document.getElementById("celsius").value);
    if (isNaN(c)) {
        document.getElementById("result").innerText = "Vui lòng nhập số nhiệt độ cần chuyển đổi!";
        return ;
    }
    let f = (c*9)/5 + 32;
    document.getElementById("result").innerText = "Độ F: " + f;
}