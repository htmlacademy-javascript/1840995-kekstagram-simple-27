import { renderPictures } from './pictures.js';
import { showAlert } from './util.js';
import './form.js';
import './scale.js';
import './effects.js';
import { getData } from './api.js';
import { setUserFormSubmit } from './form.js';

getData(renderPictures, showAlert);

setUserFormSubmit();
