import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

// Generăm markup-ul HTML pentru fiecare imagine din matricea galleryItems
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`;
  })
  .join('');

// Verifică dacă markup-ul este generat corect
console.log(galleryMarkup);

// Introducem markup-ul în containerul galeriei
galleryContainer.innerHTML = galleryMarkup;
