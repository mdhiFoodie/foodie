export const addReviewHelper = `
  SELECT u.name, u.phone, u.type, u.email  
  FROM delivery_users AS du
  INNER JOIN 
  users AS u 
  ON 
  du.id_users= u.id 
  WHERE 
  du.id_businesses=$1
`;

export const getReviewsHelper = `
  SELECT r.id, r.rating, r.comment, r.createdAt, u.profilepicture, u.name 
  FROM reviews AS r
  INNER JOIN 
  reviews_users AS ru
  ON 
  r.id = ru.id_reviews
  INNER JOIN
  users AS u
  ON
  ru.id_users = u.id
  WHERE 
  id_businesses=$1
`;

