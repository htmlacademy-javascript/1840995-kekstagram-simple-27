import {createPhotos} from './data.js';

const userDialog = document.querySelector('.container');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarPictures = createPhotos();

const pictureFragment = document.createDocumentFragment();

similarPictures.forEach((photo) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').innerHTML.src = photo.url;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments;

  pictureFragment.appendChild(pictureElement);
});

userDialog.appendChild(pictureFragment);
