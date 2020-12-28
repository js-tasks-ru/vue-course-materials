/**
 *
 * @param {String} time - current time in HH:MM format
 * @param {Number} deltaMinutes - time shift in minutes
 * @returns {String} shifted time for deltaMinutes in HH:MM format
 */
function shiftTime(time, deltaMinutes) {
  if (!/([0-1]\d|2[0-3]):[0-5]\d/.test(time)) {
    throw new Error('Time must be in HH:MM format');
  }

  const [h, m] = time.split(':').map((x) => parseInt(x, 10));
  const timeInMinutes = h * 60 + m;

  const newTimeInMinutes = (timeInMinutes + deltaMinutes) % (24 * 60);

  const hours = (newTimeInMinutes / 60).toFixed(0).padStart(2, '0');
  const minutes = (newTimeInMinutes % 60).toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}

module.exports = {
  shiftTime,
};
