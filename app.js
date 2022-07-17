// -------- CHARGEMENT --------

const chargement = document.querySelector('.chargement');

window.addEventListener('load', () => {

    chargement.classList.add('fondu-out');
    setTimeout(() => { chargement.classList.add('zIndexNegatif'); }, 700)
})


// ------- ANIMATION --------

window.addEventListener('scroll', () => { 
    var reveals = document.querySelectorAll(".projet");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("actif");
        }
    }
});