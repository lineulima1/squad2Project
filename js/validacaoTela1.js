document.getElementById('input-phone').addEventListener('blur', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{2})(\d{5})(\d{4})/);
    e.target.value = `(${x[1]}) ${x[2]}-${x[3]}`;
});

var inputNome = document.getElementById("nome");
var inputEmail = document.getElementById("input-email");
function valida_email (){
    let filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if(!filter.test(inputEmail.value)){
        inputEmail.focus();
        inputEmail.style.border = "2px solid #ef3c59";
        document.getElementById("textinho-email").innerHTML='<p class="help-block ng-binding" style="color:#ef3c59;">E-mail Inválido!</p>';
        return false
    }
    inputEmail.addEventListener('blur', function(){
        if(inputEmail.value.length >= 2){
            document.getElementById("textinho-email").innerHTML = ''; // ou display: none
            inputEmail.style.border = "2px solid #999";
        }
    })
}

function valida_nome (){
    let filter2 = /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/;
    if (!filter2.test(inputNome.value)){
        inputNome.focus();
        inputNome.style.border = "2px solid #ef3c59";
        document.getElementById("textinho-nome").innerHTML='<p class="help-block ng-binding" style="color:#ef3c59;">Nome Inválido!</p>';
        return false
    }
    inputNome.addEventListener('blur', function(){
        if(inputNome.value.length >= 2){
            document.getElementById("textinho-nome").innerHTML = ''; // ou display: none
            inputNome.style.border = "2px solid #999";
        }
    })
}

inputNome.addEventListener('keyup', valida_nome);
inputEmail.addEventListener('keyup', valida_email);

if (inputNome.value.length < 2){
    inputNome.addEventListener("click", function(){
        inputNome.focus();
        inputNome.style.border = "2px solid #ef3c59";
        document.getElementById("textinho-nome").innerHTML='<p class="help-block ng-binding" style="color:#ef3c59;">Campo obrigatório!</p>';
    });
}
inputNome.addEventListener('blur', function(){
    if(inputNome.value.length >= 2){
        document.getElementById("textinho-nome").innerHTML = ''; // ou display: none
        inputNome.style.border = "2px solid #999";
    }
});

if (inputEmail.value.length < 2){
    inputEmail.addEventListener("click", function(){
        inputEmail.focus();
        inputEmail.style.border = "2px solid #ef3c59";
        document.getElementById("textinho-email").innerHTML='<p class="help-block ng-binding" style="color:#ef3c59;">Campo obrigatório!</p>';
    });
}
inputEmail.addEventListener('blur', function(){
    if(inputEmail.value.length >= 2){
        document.getElementById("textinho-email").innerHTML = ''; // ou display: none
        inputEmail.style.border = "2px solid #999";
    }
});

if (document.getElementById("day").value.length < 2){
    document.getElementById("day").addEventListener("click", function(){
        document.getElementById("day").focus();
        document.getElementById("day").style.border = "2px solid #ef3c59";
        document.getElementById("pBday").innerHTML = '<p class="help-block ng-binding" style="color:#ef3c59;">Campo Obrigatório!</p>';
    });
}

document.getElementById("day").addEventListener('blur', function(){
    if(document.getElementById("day").value.length >= 2){
        document.getElementById("pBday").innerHTML = ''; // ou display: none
        document.getElementById("day").style.border = "2px solid #999";
    }
});

if (document.getElementById("month").value.length < 2){
    document.getElementById("month").addEventListener("click", function(){
        document.getElementById("month").focus();
        document.getElementById("month").style.border = "2px solid #ef3c59";
        document.getElementById("pBday").innerHTML = '<p class="help-block ng-binding" style="color:#ef3c59;">Campo Obrigatório!</p>';
    });
}

document.getElementById("month").addEventListener('blur', function(){
    if(document.getElementById("month").value.length >= 2){
        document.getElementById("pBday").innerHTML = ''; // ou display: none
        document.getElementById("month").style.border = "2px solid #999";
    }
});

if (document.getElementById("year").value.length < 2){
    document.getElementById("year").addEventListener("click", function(){
        document.getElementById("year").focus();
        document.getElementById("year").style.border = "2px solid #ef3c59";
        document.getElementById("pBday").innerHTML = '<p class="help-block ng-binding" style="color:#ef3c59;">Campo Obrigatório!</p>';
    });
}

document.getElementById("year").addEventListener('blur', function(){
    if(document.getElementById("year").value.length >= 2){
        document.getElementById("pBday").innerHTML = ''; // ou display: none
        document.getElementById("year").style.border = "2px solid #999";
    }
});