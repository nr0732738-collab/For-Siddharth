function startJourney() {

    document.body.style.transition = "opacity 2s";
    document.body.style.opacity = "0";

    setTimeout(function () {
        window.location.href = "letter.html";
    }, 2000);

}