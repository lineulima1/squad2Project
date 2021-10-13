function salvaDados(){

    let dados = JSON.parse(localStorage.getItem("infosForms"))
    if(dados != null){

     let name = $id("nome")
     name.value = dados.nome
     name.style.color="black"

     let nickname = $id("nickname")
     nickname.value = dados.nickName
     nickname.style.color = "black"

     let email = $id("input-email")
     email.value = dados.email
     email.style.color = "black"

     let phone = $id("input-phone")
     phone.value = dados.phone
     phone.style.color = "black"
     
     let checkbox = $id("aprove")
     checkbox.checked = dados.checkbox

     let day = $id("day")
     day.value = dados.day
     day.style.color = "black"

    let month = $id("month")
    month.value = dados.month
    month.style.color = "black"

    let year = $id("year")
    year.value = dados.year
    year.style.color = "black"

    let age = $id("age")
    age.value = dados.age
    age.style.color = "black"

    }

}

function salvaDados1(){

    let dados = JSON.parse(localStorage.getItem("infosForms"))
   if(dados != null) {
    if(dados.link != null && dados.git != null){
        
        let linkedin = $id("linkedin")
        linkedin.value = dados.link
        linkedin.style.color= "black"

        let github = $id("github")
        github.value = dados.git
        github.style.color= "black"

        
    
    }
   } else {
    
   validaDados()
   }

}

function validaDados(){
    let dados = JSON.parse(localStorage.getItem("infosForms"))
    if(dados == null) window.location.href = "/pages/index.html"
    }

function validarUrl(path,key,destiny) {
    validaDados()
    let dados = JSON.parse(localStorage.getItem('infosForms'))
    if(window.location.pathname == path && dados[key] == null) window.location.href = destiny
    
}