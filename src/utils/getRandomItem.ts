const getRandomItem = (array: any[]) => 
  array[Math.floor(Math.random() * array.length)];

export default getRandomItem;
