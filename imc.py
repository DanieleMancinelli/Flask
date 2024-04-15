# realizzare un sito web che attraverso l'utilizzo di jas calcoli l'indice di massa corporea. 
#il sito deve essere in italòiano e in inglese. 
#l'utente inserisce peso e altezza e il programma risponde con il calcolo dell'imc, un responso ( sottopeso, normopeso, sovrappeso) e un immagine adatta
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template("homepageimc.html")

@app.route('/en')
def homepage_inglese():
    return render_template("homepageimc_inglese.html")

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)