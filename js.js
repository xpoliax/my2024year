/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

  /* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "About project";
    moreText.style.display = "none";
    } else {
    dots.style.display = "none";
    btnText.innerHTML = "About project";
    moreText.style.display = "inline";
    }
}