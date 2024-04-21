
const button_collapse_menu = document.getElementById("button_collapse_menu");
const menu_collapse = document.getElementById("menu_collapse");

// COLLAPSE MENU and CLOSE
button_collapse_menu.addEventListener("click", function() {
    if (menu_collapse.style.display == "" || menu_collapse.style.display == "none") {
        menu_collapse.style.display = "flex";

    } else {
        menu_collapse.style.display = "none";
    }
});
