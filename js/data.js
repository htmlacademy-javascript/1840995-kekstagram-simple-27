import {getRandomInt} from './util.js';
import {getRandomPositiveInteger} from './util.js';
import {getRandomArrayElement} from './util.js';

const PHOTO_AMOUNT = 25;

const Like = {
  MIN: 15,
  MAX: 200
};

const Comment = {
  MIN: 0,
  MAX: 200
};

const DESCRIPTIONS = [
  'Любое описание 1',
  'Любое описание 2',
  'Любое описание 3',
  'Любое описание 4',
  'Любое описание 5',
  'Любое описание 6',
  'Любое описание 7',
  'Любое описание 8',
];

const getPhoto = (index) => ({
  id: index,
  url:`photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInt(Like.MIN, Like.MAX),
  comments: getRandomPositiveInteger(Comment.MIN, Comment.MAX),
});

const createPhotos = () => Array.from(
  {length: PHOTO_AMOUNT},
  (_, indexPhoto) => getPhoto(indexPhoto + 1));

export {createPhotos};
