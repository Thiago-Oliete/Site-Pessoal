// script.js
let currentIndex = 0;

function moveSlide(direction) {
  const items = document.querySelectorAll('.carrossel-item');
  const totalItems = items.length;

  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  items[currentIndex].classList.add('active');

  const carrosselInner = document.querySelector('.carrossel-inner');
  carrosselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
