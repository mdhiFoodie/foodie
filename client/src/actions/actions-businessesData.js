export const businessesData = businesses => {
  return {
    type: 'BUSINESSES_DATA',
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(businesses);
      }, 2000);
    }),
  };
};
