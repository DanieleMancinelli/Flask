function calcolaIMC() {
    const peso = parseFloat(document.getElementById("peso").value); /*parseFloat() viene utilizzata per convertire una stringa in un numero decimale (float).*/
    const altezza = parseFloat(document.getElementById("altezza").value); 

    const IMC = peso / (altezza * altezza);
    const IMCarrotondato = IMC.toFixed(2);

    let classificazione;
    if (IMC < 18.5) {
        classificazione = "underweight";
    } else if (IMC < 24.9) {
        classificazione = "normal weight";
    } else if (IMC < 29.9) {
        classificazione = "overweight";
    } else {
        classificazione = "obese";
    }

    const output = "Your IMC is " + IMCarrotondato + ", and you are " + classificazione;
    document.getElementById("risultato").innerHTML = output;
};