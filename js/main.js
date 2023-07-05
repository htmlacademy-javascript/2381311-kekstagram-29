const DESCRIPTIONS = [
  'ля-ля',
  'meow',
  'туц-туц',
  'гав',
  'жжж',
];

const MESSAGES = [
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

//1. создать функцию, которая будет генерировать случайное целое число
function getRandomInt (min, max) {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

//2. создать функцию, которая будет генерировать уникальный идентификатор
function getUniqueId (min, max) {

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
}

//3. создать функцию, которая будет выбирать случайный элемент из массива
const getRandomArrayElement = (arr) => arr[getRandomInt(0, arr.length - 1)];


const getPhotoId = getUniqueId(1, 25);
const getCommentId = getUniqueId(1, Infinity);


// СГЕНЕРИРОВАТЬ объект createComment:
// 1. id — любое число. Идентификаторы не должны повторяться.
// 2. avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.
// 3. message — вам необходимо взять одно или два случайных предложения из массива messages
// 4. name (случайное из массива)
function createComment () {
  return {
    id: getCommentId,
    avatar: `/img/avatar-${getRandomInt(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES, getRandomInt(1, 2)),
    name: getRandomArrayElement (NAMES),
  };
}

// СГЕНЕРИРОВАТЬ объект createPhoto:
// 1. id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
// 2. url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
// 3. description, строка — описание фотографии. Описание придумайте самостоятельно.
// 4. likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
// 5. comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом.
function createPhoto () {
  return {
    id: getPhotoId,
    url: `/photos/${getPhotoId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInt (15, 200),
    comments: Array.from({length: getRandomInt(0, 30)}, createComment),
  };
}

createPhoto();
