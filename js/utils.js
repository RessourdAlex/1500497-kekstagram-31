// функция получения случайного числа в диапазоне чисел
const searchRandomNumberRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// функция получения случайного элемента массива по индексу
const getRandomElementArray = (array) => array[searchRandomNumberRange(0, array.length - 1)];

export {searchRandomNumberRange, getRandomElementArray};
