function calcolaIMC() {
    const peso = parseFloat(document.getElementById("peso").value); /*parseFloat() viene utilizzata per convertire una stringa in un numero decimale (float).*/
    const altezza = parseFloat(document.getElementById("altezza").value); 

    const IMC = peso / (altezza * altezza);
    const IMCarrotondato = IMC.toFixed(2);

    let classificazione;
    if (IMC < 18.5) {
        classificazione = "sottopeso";
    } else if (IMC < 24.9) {
        classificazione = "normopeso";
    } else if (IMC < 29.9) {
        classificazione = "sovrappeso";
    } else {
        classificazione = "obeso";
    }

    const output = "Il tuo IMC è " + IMCarrotondato + ", e sei " + classificazione;
    document.getElementById("risultato").innerHTML = output;
};