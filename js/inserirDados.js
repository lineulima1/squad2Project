let $id = document.getElementById.bind(document)


function inserirDados1(){ // Função para salvar os dados da página 1

    // localStorage.clear() // Verificar uma forma de limpar os dados a não se neste botão

    let nome = $id("nome")
    let nickName = $id("nickname")
    let email = $id("input-email")
    let phone = $id("input-phone")
    let day = $id("day")
    let month = $id("month")
    let year = $id("year")
    let age = $id("age")
    let checkbox = $id("aprove")
  
    let dados = {}

localStorage.getItem("infosForms") ? dados = JSON.parse(localStorage.getItem("infosForms")) : localStorage.setItem("infosForms","{}")

        dados['nome'] = nome.value,
        dados['nickName'] = nickName.value,
        dados['email'] = email.value,
        dados['phone'] = phone.value,
        dados['birth'] = `${day.value}/${month.value}/${year.value}`,
        dados['day'] = day.value,
        dados['month'] = month.value,
        dados['year'] = year.value,
        dados['age'] = age.value,
        dados['checkbox'] = checkbox.checked
 
    
 
    localStorage.setItem("infosForms", JSON.stringify(dados))
}

function inserirDados2(){ // Função para salvar os dados da página 2
    let git = $id("github")
    let link = $id("linkedin")

    let dados = JSON.parse(localStorage.getItem("infosForms"))

    dados['git'] = git.value
    dados['link'] = link.value

    localStorage.setItem("infosForms", JSON.stringify(dados))
   }

function inserirDados3(){  // Função para salvar os dados da página 3

    let teamName = $id("teamName")
    let institution = $id("institution")
    let graduation = $id("graduation")
    let certificates = $id("certificates")

   let dados = JSON.parse(localStorage.getItem("infosForms"))
if(dados.all_certificates.length < 5 && certificates.value != " "){
   
    dados['all_certificates'].push(certificates.value)

}
   dados['teamName'] = teamName.value
   dados['institution'] = institution.value
   dados['graduation'] = graduation.value

   localStorage.setItem("infosForms", JSON.stringify(dados))
}

function addCertificados(certificate){

    // let all_certificates = document.querySelectorAll(".certificate")

    let dados = JSON.parse(localStorage.getItem("infosForms"))
    let all_certificates = []
    console.log(dados)
    console.log(Object.keys(dados))

    if(Object.keys(dados).includes("all_certificates")){

     all_certificates = dados.all_certificates
    }

       all_certificates.push(certificate)

dados['all_certificates'] = all_certificates

localStorage.setItem("infosForms", JSON.stringify(dados))
}

function limparLocalStorage (){
    localStorage.clear()
    
    window.location.href = 'index.html'

}