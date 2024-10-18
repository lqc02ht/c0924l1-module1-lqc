function countDay() {
    let month = parseFloat(document.getElementById("month").value);
    
    if (isNaN(month)) {
        document.getElementById("result").innerText="Vui lòng nhập tháng!";
        return;
    }

    switch (month) {
        case 1:
            document.getElementById("result").innerText="Tháng " + month + " có 31 ngày.";
            break;
        case 2:
            document.getElementById("result").innerText="Tháng " + month + " có 28 hoặc 29 ngày.";
            break;
        case 3:
            document.getElementById("result").innerText="Tháng " + month + " có 31 ngày.";
            break;
        case 4:
            document.getElementById("result").innerText="Tháng " + month + " có 30 ngày.";
            break;
        case 5:
            document.getElementById("result").innerText="Tháng " + month + " có 31 ngày.";
            break;
        case 6:
            document.getElementById("result").innerText="Tháng " + month + " có 30 ngày.";
            break;
        case 7:
            document.getElementById("result").innerText="Tháng " + month + " có 31 ngày.";
            break;
        case 8:
            document.getElementById("result").innerText="Tháng " + month + " có 31 ngày.";
            break;
        case 9:
            document.getElementById("result").innerText="Tháng " + month + " có 30 ngày.";
            break;
        case 10:
            document.getElementById("result").innerText="Tháng " + month + " có 31 ngày.";
            break;
        case 11:
            document.getElementById("result").innerText="Tháng " + month + " có 30 ngày.";
            break;
        case 12:
            document.getElementById("result").innerText="Tháng " + month + " có 31 ngày.";
            break;
        default:
            document.getElementById("result").innerText="Vui lòng nhập lại tháng!";
            break;
    }
}