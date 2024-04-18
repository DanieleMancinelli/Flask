function calcolaIMC() {
    const peso = parseFloat(document.getElementById("peso").value); /*parseFloat() viene utilizzata per convertire una stringa in un numero decimale (float).*/
    const altezza = parseFloat(document.getElementById("altezza").value); 

    const IMC = peso / (altezza * altezza);
    const IMCarrotondato = IMC.toFixed(2);

    let classificazione;
    let immagine;
    if (IMC < 18.5) {
        classificazione = "underweight";
        immagine = 'static/images/fiorentina.jpg';
    } else if (IMC < 24.9) {
        classificazione = "normal weight";
        immagine = 'static/images/pasta_pomodoro.jpg';
    } else if (IMC < 29.9) {
        classificazione = "overweight";
        immagine = 'static/images/insalata.jpg';
    } else {
        classificazione = "obese";
        immagine = 'static/images/palestra.jpg';
    }
    
    document.getElementById("immagine").src = immagine;

    const output = "Your IMC is " + IMCarrotondato + ", and you are " + classificazione;
    document.getElementById("risultato").innerHTML = output;
};