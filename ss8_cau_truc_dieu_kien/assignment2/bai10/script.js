function count() {
    let kwh = parseFloat(document.getElementById("kwh").value);
    let cost = 0;
    if (isNaN(kwh)) {
        document.getElementById("result").innerText = "Vui lòng nhập số kwh điện!";
        return ;
    }
    if (kwh < 0) {
        document.getElementById("result").innerText = "Vui lòng nhập lại số điện hợp lệ!";
        return ;
    } else if (kwh <= 50) {
        cost = kwh*1600;
    } else if (kwh <= 100) {
        cost = (kwh - 50)*1800 + 50*1600;
    } else if (kwh <= 200) {
        cost = (kwh - 100)*2000 + (kwh - 50)*1800 + 50*1600;
    } else {
        cost = (kwh - 200)*2200 + (kwh - 100)*2000 + (kwh - 50)*1800 + 50*1600;
    }
    document.getElementById("result").innerText = "Tiền điện của bạn hết " + cost + "đ";
}