const toggleButton = document.getElementById('toggleButton');
const r = document.querySelector(':root');

let theme_white = true

toggleButton.addEventListener('click', () => { //lorsque le bouton est utilisé
    if (theme_white) { //si le bouton est sur le thème clair alors
        r.style.setProperty('--theme', '#000000'); // objets reliés à ces variations changes pour ces couleurs
        r.style.setProperty('--theme_background_button', 'rgba(0, 15, 101, 0.74)') // objets reliés à ces variations changes pour ces couleurs
    } else {
        r.style.setProperty('--theme', '#ffffff');//si le bouton est sur le thème sombre alors
        r.style.setProperty('--theme_background_button', 'rgba(137, 220, 251, 0.75)') 
    }
    theme_white = !theme_white
});
