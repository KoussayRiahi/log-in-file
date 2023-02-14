nom = document.getElementById("nom").value;
prenom = document.getElementById("prenom").value;
moyenne = document.getElementById("moyenne").value;
num = document.getElementById("numero").value;
function verif() {
    if (!alphabetique(nom) || !alphabetique(prenom)) {
        alert("le nom doit etre alphabetique !!!");
        return false;
    }
    if (!is_numerique(num) || !is_numerique(moyenne)) {
        alert("le numero doit etre chiffre !!!");
        return false;
    }
}
function alphabetique(txt) {
    alpha=0;
    for (let i = 0; i < txt.length; i++) {
    if (!"A" <= txt[i].toUpperCase() && txt[i].toUpperCase() <= "Z") {
        alpha++
    }
}
return alpha === txt.length;


}
function is_numerique(txt) {
    num=0;
    for (let i = 0; i < txt.length; i++) {
    if ("0" <= txt[i] && txt[i] <= "9") {
        num++
    }
}
return num === txt.length;
}