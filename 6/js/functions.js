//первая функция
const isStringValid = (string, maxLength) => string.length <= maxLength;

isStringValid('vftgfrhdjk');

/*
//вторая функция
function isPalindrom (rawString) {
  const cleanedStr = rawString.replaceAll(' ', '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');

  return cleanedStr === reversedStr;
}

isPalindrom();
*/

//вторая функция (учитывая рекомендации с созвона)
function isPalindrom (rawString) {
  let left = 0;
  let right = rawString.length - 1;
  while (left <= right) {
    if (rawString[left] !== rawString[right]) return false;
    left++;
    right--;
  }
  return true;
}

isPalindrom('dfgfd');

//3-я функция
function extractNumber (str) {
  const extracted = str.toString().replace(/\D/g, '');

  if (extracted === '') {
    return NaN;
  }

  return parseInt(extracted, 10);
}

extractNumber();
