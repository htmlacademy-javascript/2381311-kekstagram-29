//первая функция
//const isStringValid = (string, maxLength) => string.length <= maxLength;

//isStringValid('vftgfrhdjk');

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
/*
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
*/

//3-я функция
/*function extractNumber (str) {
  const extracted = str.toString().replace(/\D/g, '');

  if (extracted === '') {
    return NaN;
  }

  return parseInt(extracted, 10);
}

extractNumber();


//5. Функции возвращаются

const minutesToHours = (time) => {
  const [hour, minute] = time.split(':').map((el) => parseInt(el, 10));
  return hour * 60 + minute;

};

minutesToHours();

const isMeetingDuringTime = (startTime, endTime, meetingTime, duration) => {

  const startWork = minutesToHours(startTime);
  const endWork = minutesToHours(endTime);
  const meeting = minutesToHours(meetingTime);

  const endMeeting = meeting + duration;

  return startWork >= meeting && endMeeting <= endWork;
};

isMeetingDuringTime('08:00', '17:30', '14:00', 90);
isMeetingDuringTime('8:0', '10:0', '8:0', 120);
isMeetingDuringTime('08:00', '14:30', '14:00', 90);
isMeetingDuringTime('14:00', '17:30', '08:0', 90);
isMeetingDuringTime('8:00', '17:30', '08:00', 900);
*/
