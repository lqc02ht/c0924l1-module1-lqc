function rank() {
    let midterm = parseFloat(document.getElementById("midterm").value);
    let final = parseFloat(document.getElementById("final").value);
    let average = (midterm + final)/2;
    if (average >= 8) {
        document.getElementById("result").innerText="Học lực của bạn là: Giỏi";
    } else if (average >= 6.5 && average < 8) {
        document.getElementById("result").innerText="Học lực của bạn là: Khá";
    } else if (average >= 5 && average < 6.5) {
        document.getElementById("result").innerText="Học lực của bạn là: Trung bình";
    } else {
        document.getElementById("result").innerText="Học lực của bạn là: Kém";
    }
}