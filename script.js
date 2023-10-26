//1.Write a JavaScript function that reverses the elements in an array without using the built-in reverse method.

function reverseArray(arr) {
  const reversed = [];
  for (const element of arr) {
    reversed.unshift(element);
  }
  return reversed;
}
const array1 = [1, 2, 3, 4, 5];
console.log(reverseArray(array1));
const array2 = ["apple", "banana", "cherry"];
console.log(reverseArray(array2));

//2.Write a JavaScript function that takes an array of numbers from 1 to N (with one number missing) and returns the missing number.

function findAndPrintMissingNumbers(arraysOfMissingNumbers) {
  function findMissingNumbers(arr) {
    const missingNumbers = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] > 1) {
        missingNumbers.push(arr[i] + 1);
      }
    }
    return missingNumbers;
  }

  for (const arr of arraysOfMissingNumbers) {
    const missingNumbers = findMissingNumbers(arr);
    if (missingNumbers.length > 0) {
      console.log(missingNumbers.join(", "));
    }
  }
}

const arrayOfMissing1 = [1, 2, 4, 5, 6];
const arrayOfMissing2 = [10, 11, 12, 14];

findAndPrintMissingNumbers([arrayOfMissing1, arrayOfMissing2]);

//3.Write a JavaScript function that takes two arrays and returns an array containing elements that are common to both arrays.

function findIntersection(arrayOne, arrayTwo) {
  const intersection = [];
  for (const element of arrayOne) {
    if (arrayTwo.includes(element)) {
      intersection.push(element);
    }
  }
  return intersection;
}
const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [3, 4, 5, 6, 7];
console.log(findIntersection(arrayOne, arrayTwo));

//4.Write a JavaScript function that checks if a given substring exists within a larger string.

function containsSubstring(largerString, substring) {
  return largerString.indexOf(substring) !== -1;
}
console.log(containsSubstring("Hello, world!", "world"));
console.log(containsSubstring("JavaScript is fun", "Python"));

//5.Write a JavaScript function that takes two sorted arrays and merges them into a single sorted array.

const mergeAndSortArrays = (arrayFirst, arraySecond) => {
  return [...arrayFirst, ...arraySecond].sort((a, b) => a - b);
};
const arrayFirst = [1, 3, 5];
const arraySecond = [2, 4, 6];
console.log(mergeAndSortArrays(arrayFirst, arraySecond));

//6.Write a JavaScript function that replaces all occurrences of a substring with another string in a larger string.

function replaceAllOccurrences(inputString, target, replacement) {
  const regex = new RegExp(target, "g");
  return inputString.replace(regex, replacement);
}
console.log(
  replaceAllOccurrences(
    "This is a test. It's a simple test.",
    "test",
    "example"
  )
);

//7.Write a JavaScript function to generate the first N elements of the Fibonacci sequence.

function generateFibonacci(N) {
  if (N <= 0) return [];

  const fibonacciSequence = [0, 1];

  while (fibonacciSequence.length < N) {
    const nextValue =
      fibonacciSequence[fibonacciSequence.length - 1] +
      fibonacciSequence[fibonacciSequence.length - 2];
    fibonacciSequence.push(nextValue);
  }

  return fibonacciSequence.slice(0, N);
}

console.log(generateFibonacci(6));
console.log(generateFibonacci(8));

//8.Write a JavaScript function that finds and returns the second largest element in an array of numbers.

function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements";
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  arr.forEach(function (number) {
    if (number > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = number;
    } else if (number > secondLargest && number !== firstLargest) {
      secondLargest = number;
    }
  });
  if (secondLargest === -Infinity) {
    return "There is no second largest element in the array";
  }
  return secondLargest;
}
console.log(findSecondLargest([5, 10, 15, 5, 20]));
console.log(findSecondLargest([25, 30, 35, 20, 15]));
