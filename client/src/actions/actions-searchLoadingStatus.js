// export const searchBusinessesInFeed = (businesses) => {
//   console.log('this is my searchbusinessesaction', businesses)
//   return {
//       type: 'SEARCH_BUSINESSES',
//       payload: businesses
//   };
// };

export const loadingStatus = (loading) => {
  console.log('this is my search loading', loading)
  return {
    type: 'SEARCH_LOADING',
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(loading)
      }, 2000);
    })
  }
}