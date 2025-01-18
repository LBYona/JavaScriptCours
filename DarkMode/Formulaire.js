document.getElementById('form').addEventListener('submit' , function(e) { //relier Java à des éléments HTML

    var erreur;
    var pseudo = document.getElementById('pseudo').value
    var email = document.getElementById('email').value
    const content = document.getElementById('contenu-formulaire')

    content.innerText = pseudo + '' + email

    if (!pseudo.value) { //l'inverse de ce qui est donné
        erreur = "Veuillez renseigner un pseudo"
    }
    if (email.value == '') {//condition de non fonctionnement 
        console.log("invalide")
    }
    else {
        email.classList.add('success')
    }

})

let pseudo = document.querySelector('#pseudo')
if(pseudo.value.lenght < 6) { //donne une condition pour une partie des forms
    errorContainer.classList.add('visible')
    pseudo.classList.remove('success')//si erreur alors tout est enlevé

    let err = document.createElement('li')
    err.innerText = "le champ pseudo doit contenir au moins 6 caractères"

    errorList.appendChild(err)

} else {
    pseudo.classList.add('success')
}

let passCheck = new RegExp(//ce qui est autorisé d'utiliser dans le form
    "^(?=,*[a-z])(?=,*[A-Z])(?=,*\\d)(?=,*[-+_!@#$%^&*;,?]).+$"
);
let password = document.querySelector('#password')
if(password.value.lenght < 8 || passCheck.test(password.value) == false){//donne une condition pour une partie des forms

}




   