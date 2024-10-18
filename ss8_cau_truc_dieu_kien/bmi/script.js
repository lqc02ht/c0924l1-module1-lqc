function countBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let bmi = weight / (height*height)
    if (bmi >= 30) {
        document.getElementById("result").innerText = "Your result: Obese"
    } else if (bmi >= 25 && bmi < 30) {
        document.getElementById("result").innerText = "Your result: Overweight"
    } else if (bmi >= 18.5 && bmi < 25) {
        document.getElementById("result").innerText = "Your result: Normal"
    } else {
        document.getElementById("result").innerText = "Your result: Underweight"
    }
}