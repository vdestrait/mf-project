export const parseWikiDate = function (date) {
  const dateDay = date.slice(9, 11);
  let dateMonth = date.slice(6, 8);
  if (dateMonth === '01') {
    dateMonth = 'janvier';
  } else if (dateMonth === '02') {
    dateMonth = 'février';
  } else if (dateMonth === '03') {
    dateMonth = 'mars';
  } else if (dateMonth === '04') {
    dateMonth = 'avril';
  } else if (dateMonth === '05') {
    dateMonth = 'mai';
  } else if (dateMonth === '06') {
    dateMonth = 'juin';
  } else if (dateMonth === '07') {
    dateMonth = 'juillet';
  } else if (dateMonth === '08') {
    dateMonth = 'août';
  } else if (dateMonth === '09') {
    dateMonth = 'septembre';
  } else if (dateMonth === '10') {
    dateMonth = 'octobre';
  } else if (dateMonth === '11') {
    dateMonth = 'novembre';
  } else if (dateMonth === '12') {
    dateMonth = 'décembre';
  }
  const dateYear = date.slice(1, 5);
  return dateDay + ' ' + dateMonth + ' ' + dateYear;
};
