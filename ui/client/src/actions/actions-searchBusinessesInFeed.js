export const searchBusinessesInFeed = (businesses) => {
  console.log('this is my searchbusinessesaction', businesses)
  return {
      type: 'SEARCH_BUSINESSES',
      payload: businesses
  };
};