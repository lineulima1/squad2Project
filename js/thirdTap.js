let $ = document.querySelector.bind(document);

function redHeart() {
  if (checkRedHeart()) {
    $('#heart-button').classList.remove('red-heart');
    tradeHeart('grey');
  } else {
    $('#heart-button').classList.add('red-heart');
    tradeHeart('full');
  }
}

function tradeHeart(type) {
  let heart_img = $('.heart-img');
  console.log(heart_img);
  heart_img.src = `/icons/${type}-heart.svg`;
}

function checkRedHeart() {
  return $('#heart-button').classList.contains('red-heart') ? true : false;
}

function more() {
  let input = $('.certificates-input');
  if (input.value !== '') {
    dropdownElement(document.querySelectorAll('.certificate'), input.value);
    input.value = '';
  }
}

function checkHeart() {
  if (checkRedHeart()) {
    redHeart();
    return true;
  }
  return false;
}

function dropdownElement(element, certificate) {
  let div_content = '';
  let check_heart = checkHeart();
  switch (element.length) {
    case 0:
      let dropdown = $('.dropdown');
      dropdown.innerHTML = createDropdown();
      div_content = check_heart ? $('.heart') : $('.no-heart');
      div_content.innerHTML = addCertificate(certificate, check_heart);
      break;
    case 5:
      alert('Não pode cadastrar acima de 5 certificados');
      break;
    default:
      div_content = check_heart ? $('.heart') : $('.no-heart');
      div_content.innerHTML += addCertificate(certificate, check_heart);
      break;
  }
}
