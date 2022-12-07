// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error('word is required');

  return word[0].toUpperCase() + word.slice(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error('firstName is required');
  if (lastName === undefined) throw new Error('lastName is required');

  return `${firstName[0]}.${lastName[0]}`;
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error('originalPrice is requied');
  if (vatRate === undefined) throw new Error('vatRate is required');

  const sum = (originalPrice / 100) * vatRate;
  const addVAT = originalPrice + sum;

  return Number.parseFloat(addVAT.toFixed(2));
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error('originalPrice is required');
  if (reduction === undefined) throw new Error('reduction is required');

  const sum = (originalPrice / 100) * reduction;
  const salePrace = originalPrice - sum;

  return Number.parseFloat(salePrace.toFixed(2));
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error('str is required');

  const middle = (str.length - (str.length % 2)) / 2;

  if (str.length % 2 === 0) {
    return str.substring(middle - 1, middle + 1);
  } else {
    return str.substring(middle, middle + (str.length % 2));
  }
}

export function reverseWord(word) {
  if (word === undefined) throw new Error('word is required');

  return word.split('').reverse().join('');
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error('words is required');

  let arrayWords = [];

  for (let i = 0; i < words.length; i++) {
    arrayWords.push(reverseWord(words[i]));
  }

  return arrayWords;
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error('users is required');

  return users.reduce((acc, user) => {
    if (user.type === 'Linux') {
      return (acc += 1);
    }
    return acc;
  }, 0);
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error('scores is required');

  const sum = scores.reduce((acc, score) => acc + score, 0);
  const meanScore = sum / scores.length;

  return Number.parseFloat(meanScore.toFixed(2));
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error('n is required');

  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz';
  } else if (n % 3 === 0) {
    return 'fizz';
  } else if (n % 5 === 0) {
    return 'buzz';
  } else {
    return n;
  }
}
