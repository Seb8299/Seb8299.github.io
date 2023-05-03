// header expander

let kuenstlerExpanded = true;
let kuenstlerClicked = false;

function onKuenstler(reset=false) {
    if (!reset) {
        kuenstlerClicked = true;
    }

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
let kategorieClicked = false;

function onKategorie(reset=false) {

    if (!reset) {
        kategorieClicked = true;
    }

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

addEventListener("click", myFunction);

function myFunction() {
    if (kuenstlerClicked) kuenstlerClicked = false;
    else if (!kuenstlerExpanded) onKuenstler(true);

    if (kategorieClicked) kategorieClicked = false;
    else if (!kategorieExpanded) onKategorie(true);
} 

// onDirChange

if (window.innerHeight > window.innerWidth) {
    console.log("portrait")
} else {
    console.log("landscape")
}

window.addEventListener("resize", (event) => {

    if (window.innerHeight > window.innerWidth) {
        console.log("portrait")
    } else {
        console.log("landscape")
    }
});

// burger

function onBurgerChange() {
    
}