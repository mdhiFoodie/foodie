export const signUpHelper = `
    INSERT INTO
      users (name, phone, email, password, type)
    VALUES
      ($1, $2, $3, $4, $5)
    RETURNING
      id, name, phone, email, type
`;


export const signUpDeliveryHelper = `
    WITH insUsers AS (
      INSERT INTO users
      (name, phone, email, password, type)
      VALUES 
      ($1, $2, $3, $4, $5)
      RETURNING id
    )
      INSERT INTO delivery_users 
      (id_users, id_businesses)
      SELECT id, $6 FROM insUsers 
`;

export const businessSignUpHelper = `
    INSERT INTO
      businesses (businessname, address, contactname, phone, email, password, foodcategory, type, latitude, longitude)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING
      id, businessname, address, contactname, phone, email, password, foodcategory, type, latitude, longitude
`;

export const loginHelper = `
    SELECT
      u.id, u.name, u.email, u.password, u.type, u.phone
      FROM
        users AS u 
      WHERE 
      email=$1
      UNION ALL 
      SELECT
      b.id, b.businessname, b.email, b.password, b.type, b.phone
      FROM
        businesses as b
      WHERE 
      email=$1
`;
