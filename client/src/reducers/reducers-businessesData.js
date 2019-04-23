const businessesData = (state = null, action) => {
  switch (action.type) {
    case 'BUSINESSES_DATA_FULFILLED':
      state = {
        ...state,
        businesses: action.payload,
      };
      break;
  }
  return state;
};

export default businessesData;
