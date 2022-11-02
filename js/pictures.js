const pictureFragment = document.createDocumentFragment();
const picturesContainer = document.querySelector('.pictures');

const randerPictures = (photos) => {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

  photos.forEach((photo) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = photo.url;
    pictureElement.querySelector('.picture__img').alt = photo.description;
    pictureElement.querySelector('.picture__likes').textContent = photo.likes;
    pictureElement.querySelector('.picture__comments').textContent = photo.comments;

    pictureFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(pictureFragment);

};

export { randerPictures };
