// import $ from 'jquery';

const removeCurlyBracesContent = function (dirtyText) {
  const startCurlyBraces = dirtyText.search('{{');
  const endCurlyBraces = dirtyText.search('}}');
  const textToReplace = dirtyText.substring(startCurlyBraces, endCurlyBraces + 2);
  const newText = dirtyText.replace(textToReplace, '');
  return newText;
};

// const removeSquareContent = function (dirtyText) {
//   const startSqBracket = dirtyText.search('[');
//   // const endSqBracket = dirtyText.search('\]');
//   // const textToReplace = dirtyText.substring(startSqBracket, endSqBracket + 1);
//   // const newText = dirtyText.replace(textToReplace, '');
//   // return newText;
//   console.log(startSqBracket);
//   const textWhithoutBra = dirtyText;
//   return textWhithoutBra;
// };


export const textTreat = function (text) {
  let cleanText = text;
  do {
    cleanText = cleanText.replace('<br>', '');
  } while (cleanText.includes('<br>'));
  do {
    cleanText = cleanText.replace('<br />', '');
  } while (cleanText.includes('<br />'));
  do {
    cleanText = cleanText.replace('\'\'\'', '\'');
  } while (cleanText.includes('\'\'\''));
  do {
    cleanText = removeCurlyBracesContent(cleanText);
  } while (cleanText.includes('{{'));
  const finalText = cleanText;
  return finalText;
};
