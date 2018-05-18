export const getStripeId = `
  SELECT stripeAccount
  FROM users
  WHERE
  email=$1
`;


export const saveUserStripeAccount = `
  UPDATE users 
  SET stripeAccount=$1
  WHERE 
  email=$2
`;

