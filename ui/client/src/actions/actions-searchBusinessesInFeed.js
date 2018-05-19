// export const searchBusinessesInFeed = (businesses) => {
//   console.log('this is my searchbusinessesaction', businesses)
//   return {
//       type: 'SEARCH_BUSINESSES',
//       payload: businesses
//   };
// };

export const searchBusinessesInFeed = (businesses) => {
  return {
    type: 'SEARCH_BUSINESSES',
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(businesses)
      }, 2000);
    })
  }
}