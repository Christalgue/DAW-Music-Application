const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const millisecondsToTrackLength = ms => {
  let mins = Math.floor(ms / 60000);
  let secs = ((ms % 60000) / 1000).toFixed(0);
  return mins + ":" + (secs < 10 ? "0" : "") + secs;
};

export const getHumanReleaseDate = date => {
  let newDate = new Date(date);
  return newDate.getDate() + " " + MONTHS[newDate.getMonth()] + ", " + newDate.getFullYear();
};
