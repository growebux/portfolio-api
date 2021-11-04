const sumAnyNumbers = (...numbers) => {
  let total = 0;

  for (let number of numbers) {
    if (isNaN(number) || number < 0) {
      throw new Error("Sorry buddy only positive numbers");
    }

    let current = total + number;

    if (current > 300) {
      break;
    }

    total = current;
  }

  return total;
};

module.exports = {
  sumAnyNumbers,
};
