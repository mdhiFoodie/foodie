export const signUpHelper = `
    INSERT INTO
      users (name, phone, email, password)
    VALUES
      ($1, $2, $3, $4)
    RETURNING
      id, email
`;

export const businessSignUpHelper = `
    INSERT INTO
      businesses (businessName, address, contactName, phone, email, password, foodCategory)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7)
    RETURNING
      id, businessName, address, contactName, phone, email, password, foodCategory
`;

export const loginHelper = `
    SELECT
      id, email, password
    FROM
      users
    WHERE
      email=$1
`;
