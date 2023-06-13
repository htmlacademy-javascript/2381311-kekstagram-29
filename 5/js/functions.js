//первая функция
const isStringValid = (string, maxLength) => string.length <= maxLength;

isStringValid('vftgfrhdjk');


//вторая функция
function isPalindrom (rawString) {
  const cleanedStr = rawString.replaceAll(' ', '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');

  return cleanedStr === reversedStr;
}

isPalindrom();


//3-я функция
function extractNumber (str) {
  const extracted = str.toString().replace(/\D/g, '');

  if (extracted === '') {
    return NaN;
  }

  return parseInt(extracted, 10);
}

extractNumber();
