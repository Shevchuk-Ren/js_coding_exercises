export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error('ingredients is required');

  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error('person is required');

  return person.city === 'Manchester' ? true : false;
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error('people is required');

  const peopleOnBus = people / 40;
  const fullBuses = peopleOnBus.toString().split('.')[0];
  const emptySeats = peopleOnBus.toString().split('.')[1];

  if (Number.parseInt(emptySeats) > 0) {
    return Number.parseInt(fullBuses) + 1;
  } else {
    return Number.parseInt(fullBuses);
  }
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error('arr is required');

  const cheepArr = arr.filter((sheep) => sheep === 'sheep');

  return cheepArr.length;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error('person is required');

  return person.address.city === 'Manchester' &&
  person.address.postCode.startsWith('M') ?
  true : false;
}
