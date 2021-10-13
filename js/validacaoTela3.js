if (document.getElementById("intitution").value.length < 2){
    document.getElementById("intitution").addEventListener("click", function(){
        document.getElementById("intitution").focus();
        document.getElementById("intitution").style.border = "2px solid #ef3c59";
        document.getElementById("pInst").innerHTML='<p class="help-block ng-binding" style="color:#ef3c59;">Campo obrigatório!</p>';
    });
}
document.getElementById("institution").addEventListener('blur', function(){
    if(document.getElementById("institution").value.length >= 2){
        document.getElementById("pInst").innerHTML = ''; // ou display: none
        document.getElementById("intitution").style.border = "2px solid #999";
    }
});

if (document.getElementById("graduation").value.length < 2){
    document.getElementById("graduation").addEventListener("click", function(){
        document.getElementById("graduation").focus();
        document.getElementById("graduation").style.border = "2px solid #ef3c59";
        document.getElementById("pGrad").innerHTML='<p class="help-block ng-binding" style="color:#ef3c59;">Campo obrigatório!</p>';
    });
}
document.getElementById("graduation").addEventListener('blur', function(){
    if(document.getElementById("graduation").value.length >= 2){
        document.getElementById("pGrad").innerHTML = ''; // ou display: none
        document.getElementById("graduation").style.border = "2px solid #999";
    }
});

if (document.getElementById("teamName").value.length < 2){
    document.getElementById("teamName").addEventListener("click", function(){
        document.getElementById("teamName").focus();
        document.getElementById("teamName").style.border = "2px solid #ef3c59";
        document.getElementById("pTeam").innerHTML='<p class="help-block ng-binding" style="color:#ef3c59;">Campo obrigatório!</p>';
    });
}
document.getElementById("teamName").addEventListener('blur', function(){
    if(document.getElementById("teamName").value.length >= 2){
        document.getElementById("pTeam").innerHTML = ''; // ou display: none
        document.getElementById("teamName").style.border = "2px solid #999";
    }
});