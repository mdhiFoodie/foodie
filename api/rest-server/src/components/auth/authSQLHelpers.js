export const userSignUpHelper = `
    INSERT INTO
      users (name, phone, email, password)
    VALUES
      ($1, $2, $3)
    RETURNING
      id, email
`;

export const userLoginHelper = `
    SELECT
      id, email, username, password
    FROM
      users
    WHERE
      email=$1
`;

export const businessSignUpHelper = `
    INSERT INTO
      users (name, address, contactName, email, phone, foodCategory, password)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7)
    RETURNING
      id, email
`;

export const businessLoginHelper = `
    SELECT
      id, email, username, password
    FROM
      users
    WHERE
      email=$1
`;
