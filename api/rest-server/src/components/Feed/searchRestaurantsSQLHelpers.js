export const searchRestaurantsSQLHelper = `
    SELECT
      businessname, businesspicture, contactname, businessaddress
    FROM
      businesses
    WHERE
    businessname=$1
`;