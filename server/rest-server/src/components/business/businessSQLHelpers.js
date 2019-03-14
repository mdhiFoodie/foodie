export const gettingDeliveryTeam = `
  SELECT u.name, u.phone, u.type, u.email  
  FROM delivery_users AS du
  INNER JOIN 
  users AS u 
  ON 
  du.id_users= u.id 
  WHERE 
  du.id_businesses=$1
`;

export const gettingBusinessInfoQuery = `
  SELECT id, businesspicture, coverpicture, address, email, type, rating, foodcategory, phone, latitude, longitude, price, businessname, contactname  
  FROM businesses 
  WHERE 
  id=$1
`;

