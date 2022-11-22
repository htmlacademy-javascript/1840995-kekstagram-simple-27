import { renderPictures } from './pictures.js';
import './form.js';
import './scale.js';
import './effects.js';
import { getData } from './api.js';
import {setUserFormSubmit, closeModal} from './form.js';

// const photos = createPhotos();
// renderPictures(photos);
getData(renderPictures);

setUserFormSubmit(closeModal);
