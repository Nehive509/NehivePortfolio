function validerFormulaire() {
    var formulaire = document.forms["contact"];
    var nom = formulaire["nom"].value.trim();
    var email = formulaire["email"].value.trim();

    if (nom === "" || email === "") {
        alert("Veuillez remplir tous les champs.");
        return false;
    }

    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Adresse email invalide.");
        return false;
    }
    alert("Formulaire envoyé avec succès !");
    return true;
}
