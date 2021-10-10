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
