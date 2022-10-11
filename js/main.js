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


function getLenghtString(chosenString, maxLenght) {
  if (chosenString.length <= maxLenght) {
    return chosenString.length <= maxLenght;
  }
}
getLenghtString();
