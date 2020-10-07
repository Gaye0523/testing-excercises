function birthdayGift(momIsMad) {
  const promesa = new Promise((resolve, reject) => {
      console.log('hola')

      if (momIsMad) {
          const err = new Error(
              `Mi madre decidió no comprarme un nuevo teléfono`);
          reject(err);
      }

      resolve(`Mi mamá está feliz!, me compró un nuevo teléfono`);
  });
  return promesa
}