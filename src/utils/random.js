const getRandomIntInclusive = (sides) => {
  const min = Math.ceil(1);
  const max = Math.floor(sides);
  return () => {
    return (
      (Math.floor(Math.pow(10, 14) * Math.random() * Math.random()) %
        (max - min + 1)) +
      min
    );
  };
};

const getRandomFromList = (list) => {
  const index = getRandomIntInclusive(list.length - 1)();
  return list[index];
};

export { getRandomIntInclusive, getRandomFromList };
