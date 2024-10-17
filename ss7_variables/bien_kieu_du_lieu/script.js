function showResult() {
    let p = parseFloat(document.getElementById("physics").value);
    let c = parseFloat(document.getElementById("chemistry").value);
    let b = parseFloat(document.getElementById("biology").value);
    let average = (p + c + b)/3;
    let sum = p + c + b
    document.getElementById("average").innerText="Điểm trung bình: " + average;
    document.getElementById("sum").innerText="Tổng: " + sum;
}

function transfer() {
    let c = parseFloat(document.getElementById("celsius").value);
    let f = (c/5)*9 + 32;
    document.getElementById("fahrenheit").innerText="Độ F (Fahrenheit): " + f;
}

function count() {
    let r = parseFloat(document.getElementById("radius").value);
    const PI = 3.14;
    let area = PI*r*r;
    let perimeter = 2*PI*r;
    document.getElementById("area").innerText="Diện tích hình tròn: " + area;
    document.getElementById("perimeter").innerText="Chu vi hình tròn: " + perimeter;
}