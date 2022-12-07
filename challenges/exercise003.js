export function getSquares(nums) {
  if (nums === undefined) throw new Error('nums is required');
  return nums.map((number) => number ** 2);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error('words is required');

  let camelCaseWord = words[0];
  for (let i = 1; i < words.length; i++) {
    camelCaseWord += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return camelCaseWord;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error('people is required');

  let countSubjects = 0;
  for (let i = 0; i < people.length; i++) {
    countSubjects += people[i].subjects.length;
  }
  return countSubjects;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error('menu is required');
  if (!ingredient) throw new Error('ingredient is required');

  let isIngridient = false;
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) {
      isIngridient = true;
    }
  }
  return isIngridient;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error('arr1 is required');
  if (arr2 === undefined) throw new Error('arr2 is required');

  let duplicate = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        duplicate.push(arr1[i]);
      }
    }
  }
  
  return [...new Set(duplicate)].sort();
}
