// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  return word[0].toUpperCase() + word.slice(1);

}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return `${firstName[0]}.${lastName[0]}`;
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  const sum = originalPrice / 100 * vatRate;
  const addVAT = originalPrice + sum;

  if(Number.isInteger(addVAT)) {
    return addVAT;
  } else {
    return Number.parseFloat(addVAT.toFixed(2));
  }
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  const sum = originalPrice / 100 * reduction;
  const salePrace = originalPrice - sum;

  if(Number.isInteger(salePrace)) {
        return salePrace;

      } else {
        const format = salePrace.toFixed(2);
        
        if(format[format.length - 1 === 0]) {
          return salePrace;

        } else {
          return Number.parseFloat(salePrace.toFixed(2));
        }
      }
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  
  const middle = (str.length - str.length % 2) / 2;
  if(str.length % 2 === 0) {
    const result = str.substring(middle - 1, middle + 1)
    return result;

  } else {
    const result = str.substring(middle, middle + str.length % 2)
    return result;
  }
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  const tokens = word.split('');
  const reversed = tokens.reverse();
  const finalStr = reversed.join('');
  return finalStr;
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let arrayWords = [];
  for (let i = 0; i < words.length; i++) {
    const tokens = words[i].split('');
    const reversed = tokens.reverse();
    const finalStr = reversed.join('');
    arrayWords.push(finalStr);
  }
  return arrayWords;
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let countLinux = 0;
  for (let i = 0; i < users.length; i++) {
    if(users[i].type === "Linux") {
      countLinux += 1;
    }
  }
  return countLinux;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    const element = scores[i];
    sum += element;
  }
  const meanScore = sum/scores.length
  console.log(meanScore)
  if(Number.isInteger(meanScore)) {

        return meanScore;
      } else {
        return Number.parseFloat(meanScore.toFixed(2));
      }
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  
  if(n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz';
  } else if (n % 3 === 0) {
    return 'fizz';
  } else if(n % 5 === 0) {
    return 'buzz';
  } else {
    return n;
  }
}
