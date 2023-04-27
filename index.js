// header expander

let kuenstlerExpanded = true;

function onKuenstler() {
    let kuenstler = document.getElementById("kuenstler");

    if (kuenstlerExpanded) {

        let span = kuenstler.getElementsByClassName("material-symbols-outlined")[0];
        span.innerHTML = "expand_less";

        let expandDiv = kuenstler.getElementsByClassName("expand")[0];
        expandDiv.classList.add("visible");
        
        kuenstlerExpanded = false;
        return;
    }
    
    let span = kuenstler.getElementsByClassName("material-symbols-outlined")[0];
    span.innerHTML = "expand_more";

    let expandDiv = kuenstler.getElementsByClassName("expand")[0];
    expandDiv.classList.remove("visible");

    kuenstlerExpanded = true;
}

let kategorieExpanded = true;

function onKategorie() {
    let kategorie = document.getElementById("kategorie");

    if (kategorieExpanded) {

        let span = kategorie.getElementsByClassName("material-symbols-outlined")[0];
        span.innerHTML = "expand_less";

        let expandDiv = kategorie.getElementsByClassName("expand")[0];
        expandDiv.classList.add("visible");
        
        kategorieExpanded = false;
        return;
    }
    
    let span = kategorie.getElementsByClassName("material-symbols-outlined")[0];
    span.innerHTML = "expand_more";

    let expandDiv = kategorie.getElementsByClassName("expand")[0];
    expandDiv.classList.remove("visible");

    kategorieExpanded = true;
}