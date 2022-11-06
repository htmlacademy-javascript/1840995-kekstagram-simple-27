import { createPhotos } from './data.js';
import { renderPictures } from './pictures.js';
import './form.js';

const photos = createPhotos();
renderPictures(photos);
