export const getUserInfoForCharge = `
  SELECT stripeaccount, email 
  FROM users 
  WHERE 
  id=$1 
`;