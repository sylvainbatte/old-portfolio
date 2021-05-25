

const chargement = document.querySelector('.chargement');

window.addEventListener('load', () => {

    chargement.classList.add('fondu-out');
    setTimeout(() => { chargement.classList.add('zIndexNegatif'); }, 1600)
})