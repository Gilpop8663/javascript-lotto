const { LOTTO_NUMBER } = require('../constant');
const Console = require('./Console');

const inputValidator = {
  isNumber: (number) => Number.isInteger(number),
  isNumberInLottoRange: (number) =>
    number <= LOTTO_NUMBER.lottoEnd && number >= LOTTO_NUMBER.lottoStart,
  isUniqueArray: (array) => {
    const set = new Set(array);
    return set.size === array.length;
  },
};

const pickRandomNumberInRange = (start, end) => {
  return (
    Math.floor(Math.random() * (end + 1 - Math.ceil(start))) + Math.ceil(start)
  );
};

const printErrorAndRetry = (error, retry) => {
  Console.print(error.message);
  retry();
};

const addCommaToNumber = (number) => {
  const COUNTRY = 'en-US';
  return number.toLocaleString(COUNTRY, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });
};

module.exports = {
  addCommaToNumber,
  pickRandomNumberInRange,
  inputValidator,
  printErrorAndRetry,
};
