// export const uuid = (): number => {
//   const randomNumber = Math.floor(Math.random() * 99999999999);
//   if (String(randomNumber).length < 7) {
//     return uuid();
//   }
//   return randomNumber;
// };
export const uuidLength = 11;
export const randomMultiplier = 99999999999;

export const uuid = (function () {
  const uuidCache = new Map();

  return (): number => {
    const randomNumber = Math.floor(Math.random() * randomMultiplier);
    if (String(randomNumber).length < 11 || uuidCache.get(randomNumber)) {
      return uuid();
    }

    uuidCache.set(randomNumber, randomNumber);
    return randomNumber;
  };
})();
