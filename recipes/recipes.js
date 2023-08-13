let recipesExpanded = true;
let recipesClicked = false;

function onRecipes(reset=false) {
    if (!reset) {
        recipesClicked = true;
    }

    let recipes = document.getElementById("recipes");

    if (recipesExpanded) {

        let span = recipes.getElementsByClassName("material-symbols-outlined")[0];
        span.innerHTML = "expand_less";

        let expandDiv = recipes.getElementsByClassName("expand")[0];
        expandDiv.classList.add("visible");
        
        recipesExpanded = false;
        return;
    }
    
    let span = recipes.getElementsByClassName("material-symbols-outlined")[0];
    span.innerHTML = "expand_more";

    let expandDiv = recipes.getElementsByClassName("expand")[0];
    expandDiv.classList.remove("visible");

    recipesExpanded = true;
}

addEventListener("click", myFunction);

function myFunction() {
    if (recipesClicked) recipesClicked = false;
    else if (!recipesExpanded) onRecipes(true);
} 