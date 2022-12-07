export function findSmallNums(nums) {
  if (!nums) throw new Error('nums is required');

  return nums.filter((num) => num < 1);
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error('names is required');
  if (!char) throw new Error('char is required');

  return names.filter((name) => name.startsWith(char));
}

export function findVerbs(words) {
  if (!words) throw new Error('words is required');

  return words.filter((word) => word.startsWith('to '));
}

export function getIntegers(nums) {
  if (!nums) throw new Error('nums is required');

  const intArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) intArr.push(nums[i]);
  }
  
  return intArr;
}

export function getCities(users) {
  if (!users) throw new Error('users is required');

  const cities = users.map((user) => {
    return user.data.city.displayName;
  });

  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error('nums is required');

  return nums.map((num) => {
    const correctNum = Math.sqrt(num).toFixed(2);
    return Number.parseFloat(correctNum);
  });
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error('sentences is required');
  if (!str) throw new Error('str is required');

  return sentences.filter((sentence) => {
    if (sentence.toLowerCase().includes(str.toLowerCase())) {
      return sentence;
    }
  });
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error('triangles is required');

  return triangles.map((nums) => Math.max(...nums));
}
