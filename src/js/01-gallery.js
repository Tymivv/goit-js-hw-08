// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

//console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

const gal = galleryItems
  .map(
    ({ preview, original, description }) => `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
    </a>`,
  )
  .join('');
galleryRef.insertAdjacentHTML('beforeend', gal);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});