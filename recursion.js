/* eslint-disable no-console */
//Problem 1: Use recursion to count sheep jumping over a fence
function sheepCounter(num) {
  if (num === 0) {
    return;
  }
  console.log(num + ': Another sheep jumps over the fence');
  sheepCounter(num - 1);
}

console.log('problem1');
sheepCounter(2);

//Problem 2: Write a function that takes two parameters (base and exponent) and returns the base raised to the exponent.
function powerCalculator(base, exp) {
  if (exp < 0) {
    return 'exponent should be < 0';
  }
  else if ( exp === 0) {
    return 1;
  }
  return base * powerCalculator(base, exp - 1);
}

console.log(powerCalculator(10, 2), 'problem2');

//Problem 3: Write a function that reverses a string.
function reverseString(str) {
  if (!str) {
    return '';
  }
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString('darcey'), 'problem3');

//Problem 4: Write a function to calculate the nth triangular number
function triangular(n) {
  if (n <= 0) {
    return 0;
  }
  return n + triangular(n - 1);
}

console.log(triangular(5), 'problem4');

//Problem 5: Write a recursive function that splits a string based on a separator without using Array's split method
function stringSplitter(str, separator) {
  if (!str.includes(separator)) {
    return str;
  }
  const newIndex = [str.slice(0, str.indexOf(separator))];
  return newIndex.concat(stringSplitter(str.slice(str.indexOf(separator) + 1), separator));
}

console.log(stringSplitter('02/17/1995', '/'), 'problem5');

//Problem 6: Write a recursive function that print the Fibonacci sequence of a given number
function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(7), 'problem6');

//Problem 7: Write a recursive function that finds the factorial of a given number
function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(3), 'problem7');

//Problem 8: Write a recursive function that will help you find a possible path through the maze
function leaveMaze(maze, pos = 0, row = 0, col = 0, dir = 'S', path = []) {
  if (col < 0 || row < 0) {
    return;
  }
  if (col >= maze[0].length || row >= maze.length) {
    return;
  }
  path[pos] = dir;
  pos++;

  if (maze[row][col] === 'e') {
    console.log(path);
    return;
  }
  if (maze[row][col] === ' ') {
    maze[row][col] = 'S';
    leaveMaze(maze, pos, row -1, col, 'U', path);
    leaveMaze(maze, pos, row, col + 1, 'R', path);
    leaveMaze(maze, pos, row + 1, col, 'D', path);
    leaveMaze(maze, pos, row, col - 1, 'L', path);
  }
  pos--;
}

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

console.log('problem8');
leaveMaze(maze);

//Problem 9: Find all the ways out of the maze by using a recursive function.
function allWaysOut(maze, pos = 0, row = 0, col = 0, dir = 'S', path = []) {
  if (col < 0 || row < 0) return;
  if (col >= maze[0].length || row >= maze.length) return;
  path[pos] = dir;
  pos++;
  if (maze[row][col] === 'e') {
    console.log(path);
    return;
  }
  if (maze[row][col] === ' ') {
    maze[row][col] = 'S';
    allWaysOut(maze, pos, row - 1, col, 'U', path);
    allWaysOut(maze, pos, row, col + 1, 'R', path);
    allWaysOut(maze, pos, row + 1, col, 'D', path);
    allWaysOut(maze, pos, row, col - 1, 'L', path);
  }
  pos--;
}

const bigMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

console.log('problem9');
console.log(allWaysOut(bigMaze));

//Problem 10: Write a recursive function that creates an anagram list
function findAnagram(str) {
  if (str.length === 1) {
    return str;
  } else if (str.length === 2) {
    return [str, reverseString(str)];
  }
  let allAnagrams = [];
  for (let i = 0; i < str.length; i++) {
    let subAnagram = [];
    subAnagram = subAnagram.concat(findAnagram(str.substring(0, i) + str.substring(i + 1)));
    subAnagram = subAnagram.map(anagram => str.charAt(i) + anagram);
    allAnagrams = subAnagram.concat(allAnagrams);
  }
  return allAnagrams;
}

console.log(findAnagram('hi'), 'problem10');

//Problem 11: Write a recursive function that prints an organization chart.

const people = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {},
      },
      Zhao: {
        Richie: {},
        Sofia: {},
        Jen: {},
      },
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {},
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {},
      },
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {},
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {},
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {},
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {},
      },
    },
  },
};

function sortPeople(org, level = 0) {
  let tab = ' '.repeat(level * 4);
  Object.keys(org).forEach((key) => {
    console.log(tab + key);
    sortPeople(org[key], level + 1);
  });
}

sortPeople(people);

//Problem 12: Write a recursive function that prints out the binary representation of a given number.

function representBinary(num) {
  if (num === 0 || num === 1) {
    return num.toString();
  }
  const endBinary = (num % 2).toString();
  const remainingBinary = Math.floor(num / 2);
  const remainingToBinary = representBinary(remainingBinary);
  return remainingToBinary + endBinary;
}

console.log(representBinary(12), 'problem12');