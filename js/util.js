//модуль с вспомогательными функциями
//1. создать функцию, которая будет генерировать случайное целое число
const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

//2. создать функцию, которая будет генерировать уникальный идентификатор
const getUniqueId = (min, max) => {

  const generatedIds = [];
  let currentId = min;

  return function() {
    if (currentId > max) {
      return null;
    }

    while (generatedIds.includes(currentId)) {
      currentId++;
    }

    generatedIds.push(currentId);
    return currentId;
  };
};

//3. создать функцию, которая будет выбирать случайный элемент из массива
const getRandomArrayElement = (arr) => arr[getRandomInt(0, arr.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {
  getRandomInt,
  getUniqueId,
  getRandomArrayElement,
  isEscapeKey
};
