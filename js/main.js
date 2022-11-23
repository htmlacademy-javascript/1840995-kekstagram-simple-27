import { renderPictures } from './pictures.js';
import { showAlert } from './util.js';
import { getData } from './api.js';
import { setUserFormSubmit } from './form.js';

getData(renderPictures, showAlert);

setUserFormSubmit();
