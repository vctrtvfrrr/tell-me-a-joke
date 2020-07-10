/**
 * Calculate time to read the joke in miliseconds.
 * @param {String} text
 * @return {Number}
 */
const time2read = text => {
  const numWords = text.split(" ").length + 1;
  const milisecs = numWords * 150;

  return milisecs;
};

export default time2read;
