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

function inseriDados(){
    validarUrl("/pages/fourthTap.html","teamName","/pages/thirdTap.html")
    let dados = JSON.parse(localStorage.getItem("infosForms"))

    if(dados != null){

     let name = dados.nome
     let nameImp = document.getElementsByName("FullName")
     nameImp[0].textContent = name

     let nickname = dados.nickName
     let nicknameImp = document.getElementsByName("Nickname")
     nicknameImp[0].textContent = nickname
     
     let email = dados.email
     let emailImp = document.getElementsByName("email")
     emailImp[0].textContent = email
     
     let phone =  dados.phone
     let phoneImp = document.getElementsByName("phone")
     phoneImp[0].textContent = phone

     let birth = dados.birth
     let birthImp = document.getElementsByName("birth")
     birthImp[0].textContent = birth

    let linkedin = dados.link
    let linkedinImp = document.getElementsByName("Linkedin")
    linkedinImp[0].textContent = linkedin

    let github = dados.git
    let githubImp = document.getElementsByName("GitHub")
    githubImp[0].textContent = github

    let certificates = dados.all_certificates
    let certificateImp = document.getElementsByName("Certificates")
    certificateImp[0].innerHTML = createCertificates(certificates) 

    let teamName = dados.teamName
    let teamNameImp = document.getElementsByName("TeamName")
    teamNameImp[0].textContent = teamName

    let institution = dados.institution
    let institutionImp = document.getElementsByName("Institution")
    institutionImp[0].textContent = institution

    let graduation = dados.graduation
    let graduationImp = document.getElementsByName("Graduation")
    graduationImp[0].textContent = graduation
}}

function validaDados(){
    let dados = JSON.parse(localStorage.getItem("infosForms"))
    if(dados == null) window.location.href = "/pages/index.html"
    }

function validarUrl(path,key,destiny) {
    validaDados()
    let dados = JSON.parse(localStorage.getItem('infosForms'))
    if(window.location.pathname == path && dados[key] == null) window.location.href = destiny
    
}

