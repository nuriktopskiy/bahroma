function openMobileMenu() {
    var x = document.getElementById("bottomPanel__menu");
    var c = document.getElementById("topnav");
    
    if (x.className === "bottomPanel__menu") {
        x.className += " open";
        c.style.width = "230px";
    } else {
        x.className = "bottomPanel__menu";
        c.style.width = "0";
    }
}