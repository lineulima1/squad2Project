function createDropdown() {
  return `
      <div class="title-dropdown">
        Certificates List
        <img src="/icons/chevron-down.svg" class="chevron-down"/>
      </div>
      <div class="dropdown-content">
        <div class="heart content"></div>
        <div class="no-heart content"></div>
      </div>
  `;
}

function addCertificate(certificate, have_heart) {
  return `
      <a target="_blank" href=${certificate} class="certificate">
        <p> ${certificate} </p>
        <div class="red-heart">
        <img  src="/icons/${
          have_heart ? 'full-heart' : 'heart-white'
        }.svg" alt="" />
        </div>
      </a>
  `;
}

function alerta() {

  return `
  <div class="alerta">
  <p class="alertaErro"> Error: </p>
  <p> A maximum of 5 certificates </p>
  <a onclick="removeAlert(this)"class="alertaFechar"> OK </a>
  </div>
  `
}