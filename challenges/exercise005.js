export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error('nums is required');
  if (n === undefined) throw new Error('n is required');

  let nextNum = null;

  nums.find((num, i) => {
    if (nums[i] === n && nums.length - 1 !== i) {
      nextNum = nums[i + 1];
      return num;
    }
  })

  return nextNum;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error('str is required');

  let count1s = 0;
  let count0s = 0;
  
  for (let i = 0; i < str.length; i++) {
    str[i] === '1' ? (count1s += 1) : (count0s += 1);
  }
  return { 1: count1s, 0: count0s };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error('n is required');

  return parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error('arrs is required');

  return arrs.reduce((acc, item) => {
    const arrSum = item.reduce((a, b) => a + b, 0);
    
    return acc += arrSum;
  }, 0)
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error('arr is required');

  if (arr.length > 1) {
    let result = arr;
    let firstCount = arr[0];
    let lastCount = arr[arr.length - 1];

    result[result.length - 1] = firstCount;
    result[0] = lastCount;

    return result;
  } else {
    return arr;
  }
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error('haystack is required');
  if (searchTerm === undefined) throw new Error('searchTerm is required');

  let isTrue = false;

  for (const key in haystack) {
    if (typeof haystack[key] === 'string') {
      const description = haystack[key].toLowerCase();
      if (description.includes(searchTerm.toLowerCase())) {
        isTrue = true;
        break;
      }
    }
  }

  return isTrue;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error('str is required');

  const words = str.replace(/[.]/g, '').split(/\s/);
  let freqMap = {};

  words.forEach(function (word) {
    let countWord = word.toLowerCase().replace(/[^a-zа-яё0-9\s]/gi, '');

    if (!freqMap[countWord]) {
      freqMap[countWord] = 0;
    }
    
    freqMap[countWord] += 1;
  });

  return freqMap;
};
