function convert() {
    let amount = parseFloat(document.getElementById("amount").value);
    let option1 = document.getElementById("option1").value;
    let option2 = document.getElementById("option2").value;
    let result = 0;

    if (option1 === "vnd" && option2 === "usd") {
        result = amount/23000 + "$";
    }
    else if (option1 === "usd" && option2 === "vnd") {
        result = amount*23000 + "đ";
    }
    else {
        result = amount;
    }
    document.getElementById("result").innerText="Kết quả: " + result;
}