export const getStripeId = `
  SELECT stripeAccount
  FROM users
  WHERE
  email=$1
`;
