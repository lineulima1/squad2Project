let $ = document.getElementById.bind(document)


function inserirDados1(){ // Função para salvar os dados da página 1

    localStorage.clear()

    let nome = $("nome")
    let nickName = $("nickname")
    let email = $("input-email")
    let phone = $("input-phone")
    let day = $("day")
    let month = $("month")
    let year = $("year")
    let age = $("age")


   let dados = JSON.parse(localStorage.getItem("infosForms"))

   if(dados == null){

       localStorage.setItem("infosForms", "[]")
       dados = []
   }
   let registro = {
       nome: nome.value,
       nickName: nickName.value,
       email: email.value,
       phone: phone.value,
       day: day.value,
       month: month.value,
       year: year.value,
       age: age.value

   }

   let checkbox = document.getElementById("aprove")

        if(checkbox.checked === true && nome.value != "" && email.value != "" && age.value != "") {

            dados.push(registro)
            localStorage.setItem("infosForms", JSON.stringify(dados))

        }
   
}

function inserirDados2(){ // Função para salvar os dados da página 2
    let git = $("github")
    let link = $("linkedin")

   let dados = JSON.parse(localStorage.getItem("infosForms"))

   if(dados == null){

       localStorage.setItem("infosForms", "[]")
       dados = []
   }
   let registro = {
       git: git.value,
       link: link.value,
   }

   if(git.value != "") {

    dados.push(registro)

    localStorage.setItem("infosForms", JSON.stringify(dados))
   }
}

function inserirDados3(){  // Função para salvar os dados da página 3

    let teamName = $("teamName")
    let institution = $("institution")
    let graduation = $("graduation")
    let certificates = $("certificates")

   let dados = JSON.parse(localStorage.getItem("infosForms"))

   if(dados == null){

       localStorage.setItem("infosForms", "[]")
       dados = []
   }
   let registro = {
       certificates: certificates.value,
       teamName: teamName.value,
       institution: institution.value,
       graduation: graduation.value,
   }

   if(teamName.value != "" && institution.value != "" && graduation.value != "" && certificates.value != "")
   {
   dados.push(registro)

   localStorage.setItem("infosForms", JSON.stringify(dados))
   }
}
