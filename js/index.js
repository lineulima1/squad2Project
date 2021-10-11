function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

document.querySelector('#year').addEventListener('input', function () {
  let day = document.querySelector('#day');
  let month = document.querySelector('#month');

  let age_aux = getAge(`${this.value},${month.value },${day.value}`);

  document.querySelector('#age').value = age_aux;
});
