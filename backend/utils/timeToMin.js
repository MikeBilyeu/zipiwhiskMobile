const timeToMin = (hour, min) => {
  const timeHours = hour > 0 ? hour : 0;
  const timeMinutes = min > 0 ? parseInt(min) : 0;
  return timeHours * 60 + timeMinutes;
};

module.exports = { timeToMin };
