function countSalary() {
    let salary = parseFloat(document.getElementById("amount").value);
    let tax = 0;
    if (isNaN(salary)) {
        document.getElementById("result").innerText = "Vui lòng nhập số lương của bạn!";
        return ;
    }
    if (salary <= 0) {
        document.getElementById("result").innerText = "Số lương không hợp lệ, vui lòng nhập lại!";
        return ;
    } else if (salary <= 5000000) {
        tax = 0.05*salary;
    } else if (salary <= 10000000) {
        tax = 0.1*salary - 0.25;
    } else if (salary <= 18000000) {
        tax = 0.15*salary - 0.75;
    } else if (salary <= 32000000) {
        tax = 0.2 * salary - 1.65;
    } else if (salary <= 52000000) {
        tax = 0.25 * salary - 3.25;
    } else {
        tax = 0.3 * salary - 5.85;
    }
    document.getElementById("result").innerText = "Số thuế bạn phải nộp là: " + tax + "đ";
}