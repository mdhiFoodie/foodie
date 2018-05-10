export const signUpHelper = `
    INSERT INTO
      users (name, phone, email, password, type)
    VALUES
      ($1, $2, $3, $4, $5)
    RETURNING
      id, name, phone, email, type
`;

export const businessSignUpHelper = `
    INSERT INTO
      businesses (businessname, address, contactname, phone, email, password, foodcategory, type)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING
      id, businessname, address, contactname, phone, email, password, foodcategory, type
`;

export const loginHelper = `
    SELECT
      id, name, email, password, type, phone
    FROM
      users
    WHERE
      email=$1
`;
