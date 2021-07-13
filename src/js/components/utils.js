// Добавить элемент
const addElem = (parent, child, array) => {
  const result = parent.appendChild(document.createElement(child));

  array.forEach((element) => {
    eval(`result.${element[0]} = element[1]`);
  });

  return result;
};

// Get DOM element
const elem = (selector) => {
  return document.querySelector(selector);
};

// Get DOM elements
const elems = (selector) => {
  return document.querySelectorAll(selector);
};

// Capitalize first letter
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export { addElem, elem, capitalizeFirstLetter, elems };
