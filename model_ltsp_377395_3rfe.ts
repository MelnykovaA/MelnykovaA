const getRandomIndex = array => Math.floor(Math.random() * array.length);
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
3 * grape
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
