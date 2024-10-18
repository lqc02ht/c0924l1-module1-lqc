function check() {
    let amount = parseFloat(document.getElementById("amount").value);
    if (amount >= 100) {
        document.getElementById("result").innerText="Mức hoa hồng mà bạn nhận được là: 200$";
    } else if (amount < 100 && amount >= 50) {
        document.getElementById("result").innerText="Mức hoa hồng mà bạn nhận được là: 100$";
    } else {
        document.getElementById("result").innerText="Bạn chưa đạt đủ doanh số để được nhận hoa hồng!"
    }
}