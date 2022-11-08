const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1); // Helper

const getRandom = () => Date.now().toString() + (Math.floor(Math.random()*9999)).toString()

export {
  capitalizeFirstLetter,
  getRandom
};
