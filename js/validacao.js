document.getElementById('input-phone').addEventListener('blur', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{2})(\d{5})(\d{4})/);
    e.target.value = `(${x[1]}) ${x[2]}-${x[3]}`;
});


function valida_email (){
    let filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if(!filter.test(document.getElementById("input-email").value)){
        document.getElementById("input-email").focus();
        document.getElementById("input-email").style.border = "2px solid #ef3c59";
        document.getElementById("textinho2").innerHTML='<p class="help-block ng-binding" style="color:#ef3c59;">E-mail Inválido!</p>';
        return false
    }
}
function valida_nome (){
    let filter = /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/;
    if(document.getElementById("nome").value.length < 2){
        document.getElementById("nome").focus();
        document.getElementById("nome").style.border = "2px solid #ef3c59";
        document.getElementById("textinho").innerHTML='<p class="help-block ng-binding" style="color:#ef3c59;">Campo obrigatório!</p>';
        return false
    }else if (!filter.test(document.getElementById("nome").value)){
        document.getElementById("nome").focus();
        document.getElementById("nome").style.border = "2px solid #ef3c59";
        document.getElementById("textinho").innerHTML='<p class="help-block ng-binding" style="color:#ef3c59;">Nome Inválido!</p>';
        return false
    }
}