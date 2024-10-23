function multiplication_table() {
    let tableString = "";
    for(let i = 1; i <= 9; i++) {
        tableString += "<tr>";
        for(let j = 2; j <= 9; j++) {
            tableString += `<td>${j} x ${i} = ${j * i}</td>`;
        }
        tableString += "</tr>";
    }
    document.getElementById("multiplication_table").innerHTML = tableString;
}

multiplication_table();