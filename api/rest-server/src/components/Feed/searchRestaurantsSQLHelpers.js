export const searchRestaurantsSQLHelper = `
    SELECT
      businessname, businesspicture, contactname, address, latitude, longitude
    FROM
      businesses
    WHERE
    businessname=$1
`;