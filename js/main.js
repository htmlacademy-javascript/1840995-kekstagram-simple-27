function getRandomInt(min, max) {
  if (min <= 0 || max <= 0 || max <= min) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
getRandomInt(3, 8);

function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const checkLengthString = (string, maxLength) => string.length <= maxLength;

checkLengthString(0,200);


// В файле main.js на основе написанных по заданию ранее вспомогательных функций напишите необходимые функции для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.

// Структура каждого объекта должна быть следующей:

// id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

// description, строка — описание фотографии. Описание придумайте самостоятельно.

// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

// comments, число — количество комментариев, оставленных другими пользователями к этой фотографии. Случайное число от 0 до 200

// const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// for (let i = 0; i <= ID.length - 1; i++) {}
/* const idFunc = ID.forEach(function () {
  let i = 0;
  i++;
  return ID[i];
});

const getDescriptionPhoto = () => ({
  id: idFunc,
  url:'photos/.jpg',
  description: 'Любое описание',
  likes: getRandomInt(15, 200),
  comments: getRandomInt(0, 200),
});

const massiveDescriptionPhoto = Array.from({length: 25}, getDescriptionPhoto);

console.log(massiveDescriptionPhoto); */

const NUMBER_PICTURES = 25;

const LIKES = {
  MIN: 15,
  MAX: 200
};

const COMMENTS = {
  MIN: 0,
  MAX: 200
};

const DESCRIPTIONS_PICTURES = [
  'Любое описание 1',
  'Любое описание 2',
  'Любое описание 3',
  'Любое описание 4',
  'Любое описание 5',
  'Любое описание 6',
  'Любое описание 7',
  'Любое описание 8',
];

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getDescriptionPhoto = (index) => ({
  id: index,
  url:`photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS_PICTURES),
  likes: getRandomInt(LIKES.MIN, LIKES.MAX),
  comments: getRandomPositiveInteger(COMMENTS.MIN, COMMENTS.MAX),
});

const massiveDescriptionPhoto = Array.from(
  {length: NUMBER_PICTURES},
  (_, indexPhoto) => getDescriptionPhoto(indexPhoto + 1));

console.log(massiveDescriptionPhoto);
