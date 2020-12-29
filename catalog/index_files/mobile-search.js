function openSearch() {
    var x = document.getElementById("bottomPanel__search");
    var c = document.getElementById("mobileSearch");
    
    if (x.className === "bottomPanel__search") {
        x.className += " open";
        c.style.height = "37px";
    } else {
        x.className = "bottomPanel__search";
        c.style.height = "0";
    }
}