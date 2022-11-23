import { renderPictures } from './pictures.js';
import { showAlert } from './util.js';
import './form.js';
import './scale.js';
import './effects.js';
import { getData } from './api.js';
import {setUserFormSubmit, onErrorSubmit, onSuccessSubmit} from './form.js';

// const photos = createPhotos();
// renderPictures(photos);
getData(renderPictures, showAlert);

setUserFormSubmit(onSuccessSubmit, onErrorSubmit);
