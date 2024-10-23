function countInterest() {
    let origin = parseFloat(document.getElementById("origin").value);
    let month = parseFloat(document.getElementById("month").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let interest = origin * Math.pow(1 + (rate/100)/12, month) - origin;
    if (isNaN(origin) || isNaN(month) || isNaN(rate)) {
        document.getElementById("result").innerText = "Vui lòng nhập đầy đủ thông tin!";
        return ;
    }
    if (origin < 0 || month < 0 || rate < 0) {
        document.getElementById("result").innerText = "Số tiền, tháng, tỷ lệ phải là số dương!";
        return ;
    }
    document.getElementById("result").innerText = "Số tiền lãi sau " + month + " tháng là: " + interest + "đ";
}