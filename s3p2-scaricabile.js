// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS


//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

let cambiaH1 = function () {
    let selezionaH1 = document.querySelector('h1')
    selezionaH1.innerText = "Il testo è stato cambiato"
}




// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

let cambiaColoreBg = function () {
    let selezionaColoreBody = document.querySelector('body')
    selezionaColoreBody.style.backgroundColor = "green"
}


// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio

let cambiaIndirizzo = function () {
    let selezionaIndirizzo = document.querySelector('#footer')

    const selezionaSecondoP = selezionaIndirizzo.querySelector(":nth-child(2)")

    selezionaSecondoP.innerText = 'Via germonio'
}

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

let aggiungiCssToLink = function () {
    const selezionaLinks = document.querySelectorAll('.link')

    for (let i = 0; i < selezionaLinks.length; i++) {
        const selezionaLink = selezionaLinks[i]
        selezionaLink.style.color = 'red'
    }
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine



//PRIMO METODO: VA BENE PER RIMUOVERE L'ELEMENTO MA NON SO COME FARE SE VOGLIO RIAGGIUNGERLO

/* let rimuoviImg = function () {

    const img = document.querySelectorAll('img')
    for (let i = 0; i < img.length; i++) {
        const imgSingola = img[i]
        imgSingola.remove()
    }
} */

//SECONDO METODO: AGGIUNGENDO UNA CLASSE CSS PER ADD AND REMOVE POSSO APPLICARLA AD UN TAG HTML FACENDO AZIONARE LA FUNZIONE CORRISPONDENTE DA UN ONCLICK SUI DUE DIVERSI BUTTON ADD & REMOVE



let gestisciImg = function () {
    let getImg = document.querySelectorAll('img')
    for (let i = 0; i < getImg.length; i++) {
        const img = getImg[i]
        img.classList.toggle('hidden')
    }

}





// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata


