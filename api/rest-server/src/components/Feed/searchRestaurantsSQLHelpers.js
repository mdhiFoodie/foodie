export const searchRestaurantsSQLHelper = `
    SELECT
      businessname, businesspicture, contactname, address, latitude, longitude, rating, totalorder, price, foodcategory
    FROM
      businesses
    WHERE
    foodcategory=$1
`;