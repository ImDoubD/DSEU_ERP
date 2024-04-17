export const getUserByRollno: string = "SELECT * FROM users WHERE rollno=$1";
export const getPasswordByRollno: string = "SELECT password FROM users WHERE rollno=$1";
export const updateDetailsByRollno: string = `
  UPDATE users 
  SET program = COALESCE($1, program),
      semester = COALESCE($2, semester),
      phone = COALESCE($3, phone),
      campus = COALESCE($4, campus),
      emailid = COALESCE($5, emailid),
      gender = COALESCE($6, gender),
      alternate_phone = COALESCE($7, alternate_phone),
      father = COALESCE($8, father),
      mother = COALESCE($9, mother),
      guardian = COALESCE($10, guardian),
      last_modified = COALESCE($11, last_modified)
  WHERE rollno = $12
  AND $1 IS NOT NULL
  AND $2 IS NOT NULL
  AND $3 IS NOT NULL
  AND $4 IS NOT NULL
  AND $5 IS NOT NULL
  AND $6 IS NOT NULL;
`;

 