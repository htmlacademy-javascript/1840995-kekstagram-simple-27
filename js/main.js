import { createPhotos } from './data.js';
import { renderPictures } from './pictures.js';
import './form.js';
import './scale.js';
import './effects.js';

const photos = createPhotos();
renderPictures(photos);
