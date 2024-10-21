function start() {
    let interval = +prompt("Nhập vào khoảng số mà bạn muốn đoán "
                        + "khoảng được tính từ 0 -> số bạn nhập vào, nếu là số âm thì ngược lại):");    
    let numberRandom = Math.floor(Math.random() * interval);
    let guessNumber = +prompt("Nhập số mà bạn đoán:");
    let remaining = 5;
    while (remaining > 1) {
        if (guessNumber === numberRandom) {
            document.body.innerHTML = "<p>Chúc mừng bạn đã đoán đúng số!</p>";
            return ;
        } else if (guessNumber > numberRandom) {
            remaining --;
            guessNumber = +prompt("Số mà bạn nhập vào lớn hơn số cần đoán "
                                + "(bạn còn lại " + remaining + " lần đoán), nhập lại:");
        } else {
            remaining --;
            guessNumber = +prompt("Số mà bạn nhập vào bé hơn số cần đoán "
                                + "(bạn còn lại " + remaining + " lần đoán), nhập lại:");
        }
    }
    document.body.innerHTML = '<p>Hết lượt! Bạn đã thua và số đúng là: ' + numberRandom + '</p>';
}             
