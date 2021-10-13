if (document.getElementById("github").value.length < 2){
    document.getElementById("github").addEventListener("click", function(){
        document.getElementById("github").focus();
        document.getElementById("github").style.border = "2px solid #ef3c59";
        document.getElementById("pGit").innerHTML='<p class="help-block ng-binding" style="color:#ef3c59;">Campo obrigatório!</p>';
    });
}
document.getElementById("github").addEventListener('blur', function(){
    if(document.getElementById("github").value.length >= 2){
        document.getElementById("pGit").innerHTML = ''; // ou display: none
        document.getElementById("github").style.border = "2px solid #999";
    }
})
