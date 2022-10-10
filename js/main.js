function getRandomIntInclusive(min, max) {
  if (min <= 0 || max <= 0 || max <= min ) {
    console.log("Неподходящие значения");
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
}

// источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
getRandomIntInclusive(3, 8);
console.log(getRandomIntInclusive(1, 1));


function getLenghtString(chosenString, maxLenght) {

  if (chosenString.length < maxLenght) {
    console.log("Длина удовлетворяет параметры");
  } else {
    console.log("Превышена максимальная длина строки");
  }
}

getLenghtString();
