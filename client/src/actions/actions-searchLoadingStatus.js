export const loadingStatus = loading => {
  return {
    type: 'SEARCH_LOADING',
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(loading);
      }, 2000);
    }),
  };
};
