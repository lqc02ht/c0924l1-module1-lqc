function convert() {
    let m = parseFloat(document.getElementById("meter").value);
    if (isNaN(m)) {
        document.getElementById("result").innerText = "Please fill the box meter!";
        return ;
    }
    let ft = m*3.2808;
    document.getElementById("result").innerText = "Feet: " + ft;
}