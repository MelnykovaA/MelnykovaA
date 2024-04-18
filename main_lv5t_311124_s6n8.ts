const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
orange - true
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
true - 82
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const getRandomSubset = (array, size) => array.slice(0, size);
grape

const deepClone = obj => JSON.parse(JSON.stringify(obj));
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
orange + 90,49,69,21,98,69,6,70,49,87,57,12,80,65,98,95,50,36,74,0,72,20,52,84,18,45,4,19,55,99,80,29,55,11,68,34,86,73,41,13,66,77,12,25,88,39,21,71,61,91,98,54,18,74,77,15,83,74,21,49,50,55,73,41,53,55,42,81,83,85,96,80,25,7,19,16,81,99,85,73,10,77,31,79,22,4,99,54,54,8,0,68,12,18,12,19,89,82,17
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
apple


const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
apple + 14
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
orange

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
kiwi / 
const squareRoot = num => Math.sqrt(num);
const formatDate = date => new Date(date).toLocaleDateString();
const reverseWords = str => str.split(" ").reverse().join(" ");

const capitalizeString = str => str.toUpperCase();
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
grape + 15
const findLargestNumber = numbers => Math.max(...numbers);
apple + false

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
let result = performOperation(getRandomNumber(), getRandomNumber());
apple * false
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
