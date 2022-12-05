export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  let nextNum = null;
  for (let i = 0; i < nums.length; i++) {

    if(nums[i] === n && nums.length - 1 !== i) {
      nextNum = nums[i + 1];
      break;
    }  
  }
  return nextNum;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  
  let count1s = 0;
  let count0s = 0;
  for (let i = 0; i < str.length; i++) {
    str[i] === '1'? count1s += 1 : count0s += 1;
  }
  return { 1: count1s,  0: count0s };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  
  return (
    parseFloat(
      n
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(n)
  )           
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  
  let totalSum = 0;
  for (let i = 0; i < arrs.length; i++) {
    const arrSum = arrs[i].reduce((a,b) => a + b, 0);
    totalSum += arrSum;
  }
  return totalSum;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  
  
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
