// this will consist of:
// 1: business name
// 2: address 
// 3: rating 
// 4: food category 
// 5: total order 
// 6: daily order 
// 7: gross 
// 8: cuisine type 
// 9: email 
// 10: phone number 
// 11: contact name 

export const businessesData = (businesses) => {
    return {
        type: 'BUSINESSES_DATA',
        payload: businesses
    };
};