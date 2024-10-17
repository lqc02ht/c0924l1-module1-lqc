function showResult() {
    let m = parseFloat(document.getElementById("math").value);
    let p = parseFloat(document.getElementById("physics").value);
    let c = parseFloat(document.getElementById("chemistry").value);
    let average = (m + p + c)/3; 
    alert("Điểm trung bình 3 môn của bạn là: " + average);
}