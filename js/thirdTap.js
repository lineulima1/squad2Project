document.querySelector('.heart').addEventListener('click', function () {
  if (this.classList.contains('heart-red')) {
    this.classList.remove('heart-red');
  } else {
    this.classList.add('heart-red');
  }
});

document.querySelector('.more').addEventListener('click', function () {});
