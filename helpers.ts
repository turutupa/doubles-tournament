export const uuid = (): number => {
  const randomNumber = Math.floor(Math.random() * 99999999999);
  if (String(randomNumber).length < 7) {
    return uuid();
  }
  return randomNumber;
};
