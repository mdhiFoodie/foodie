export const searchRestaurantsSQLHelper = `
    SELECT
      businessname, businesspicture, contactname, businessaddress, latitude, longitude
    FROM
      businesses
    WHERE
    businessname=$1
`;