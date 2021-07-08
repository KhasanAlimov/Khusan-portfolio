// Добавить элемент
const addElem = (parent, child, array) => {
    const result = parent.appendChild(document.createElement(child));
  
    array.forEach((element) => {

      eval(`result.${element[0]} = element[1]`)
    });
  
  return result;
};

// Get DOM element
const elem = (selector) => {
  return document.querySelector(selector);
};

export { addElem, elem };