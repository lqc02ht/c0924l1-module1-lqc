function count() {
    let edge = parseFloat(document.getElementById("edge").value);
    if (isNaN(edge)) {
        document.getElementById("result").innerText = "Vui lòng nhập vào cạnh hình vuông!";
        return ;
    }
    if (edge < 0) {
        document.getElementById("result").innerText = "Cạnh hình vuông không thể là số âm!";
        return ;
    }
    let area = edge*edge;
    document.getElementById("result").innerText = "Diện tích hình vuông: " + area;
}