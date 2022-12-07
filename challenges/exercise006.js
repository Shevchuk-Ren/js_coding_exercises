/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
  if (arr === undefined) throw new Error('arr is required');

  const initialValue = 0;

  const sumWithInitial = arr.reduce((accumulator, currentValue) => {
    if (currentValue % 3 === 0 || currentValue % 5 === 0) {
      return accumulator + currentValue;
    }

    return accumulator;
  }, initialValue);

  return sumWithInitial;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
  if (str === undefined) throw new Error('str is required');

  if (str.length !== 4) return false;

  const pairs = 'A, C, T, G';
  let dna = [];

  for (let i = 0; i < str.length; i++) {
    if (pairs.includes(str[i])) dna.push(str[i]);
  }

  return new Set(dna).size === str.length ? true : false;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error('str is required');

  let complementaryDNA = '';

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'T':
        complementaryDNA += 'A';
        break;
      case 'C':
        complementaryDNA += 'G';
        break;
      case 'A':
        complementaryDNA += 'T';
        break;
      case 'G':
        complementaryDNA += 'C';
        break;
    }
  }

  return complementaryDNA;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
  if (n === undefined) throw new Error('n is required');

  if (n < 0) n = -n;
  if (n < 4) return true;
  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5, N = Math.sqrt(n); i <= N; i += 2) if (n % i == 0) return false;

  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error('n is required');
  if (fill === undefined) throw new Error('fill is required');

  let matrix = [];

  for (let i = 0; i < n; i++) {
    let filler = [];

    for (let j = 0; j < n; j++) {
      filler.push(fill);
    }

    matrix.push(filler);
  }

  return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error('staff is required');
  if (day === undefined) throw new Error('day is required');

  const count = staff.reduce((acc, member) => {
    if (member?.rota.includes(day)) {
      return (acc += 1);
    }
    return acc;
  }, 0);

  return count >= 3 ? true : false;
};
