// Authentification avec disparition du formulaire
window.addEventListener("load",function(){
    var form1 = document.getElementById("formConn");
    var form2 = document.getElementById("formInsc");
    form1.onsubmit = verifAuth;
    form2.onsubmit = verifInsc;
    verifConn();
});
function verifConn(){ // s'occupe de vérifier si l'utilisateur est co et transforme l'affichage
    var test = localStorage.getItem("Username");
    if(test != null){
        divConn.classList.remove("hide");
        formConn.classList.add("hide");
        formInsc.classList.add("hide");
    }
    else {
        formConn.classList.remove("hide");
        formInsc.classList.remove("hide");
    }
}
function verifAuth(){ //  s'occupe de vérifier le formulaire d'authentification
    var username = document.getElementById("usrname1").value;
    var password = document.getElementById("pword1").value;
    if (username in Users){
        if (Users[username].password == password){
            localStorage.setItem('Username',username);
        }
        else {
            alert("Mot de passe incorrecte");
        }
    }
    else {
        alert("Identifiant incorrecte");
    }
}
function verifInsc(){ // s'occupe de vérifier le formulaire d'inscription
    var username = document.getElementById("usrname2").value;
    var password = document.getElementById("pword2").value;
    var checkpassword = document.getElementById("checkpword2").value;
    var mail = document.getElementById("mail").value;
    if (!(username in Users)){
        if (password != checkpassword){
            alert("Les deux mots de passe sont différents");
        }
        else{
            localStorage.setItem('Username',username);
        }
    }
    else{
        alert("L'identifiant est déjà pris");
    }
}


