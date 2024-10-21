function count() {
    // cách tính thuê bao
    // Phí thuê bao bắt buộc là 25 nghìn.
    // 600 đồng cho mỗi gọi của 50 phút đầu tiên.
    // 400 đồng cho mỗi phút gọi của 150 phút tiếp theo.
    // 200 đồng cho bất kỳ mỗi phút nào sau 200 phút đầu tiên.
    let minutes = parseFloat(document.getElementById("minutes").value);
    let cost = 0;
    let sum = 0;
    const FIXED_COST = 25000;
    if (minutes > 200) {
        cost = (minutes - 200)*200 + 150*400 + 50*600;
    } else if (minutes > 50) {
        cost = (minutes - 50)*400 + 50*600;
    } else {
        cost = minutes*600;
    }
    sum = 0.01*cost + FIXED_COST;
    document.getElementById("result").innerText="Số tiền bạn phải nộp là: " + sum;
}