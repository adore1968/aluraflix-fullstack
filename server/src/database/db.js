import mysql from "mysql2/promise";

export let pool;

export const connection = async () => {
  try {
    const uri = "mysql://root:clave123456789@localhost:3306/test";
    pool = mysql.createPool(uri);
    await pool.getConnection();
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log(error);
    pool = null;
  }
};
