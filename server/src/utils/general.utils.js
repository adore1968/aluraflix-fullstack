import { pool } from "../database/db.js";

export const getRowsUtil = async (table) => {
  const sql = `SELECT * FROM ${table}`;
  const [rows] = await pool.query(sql);
  return rows;
};

export const getRowUtil = async (table, id) => {
  const sql = `SELECT * FROM ${table} WHERE id = ?`;
  const [rows] = await pool.query(sql, [id]);
  return rows;
};

export const updateRowUtil = async (table, values) => {
  const sql = `UPDATE ${table} SET ? WHERE id = ?`;
  const [result] = await pool.query(sql, values);
  const rows = await getRowUtil(table, values[1]);
  return [result, rows];
};

export const deleteRowUtil = async (table, id) => {
  const sql = `DELETE FROM ${table} WHERE id = ?`;
  const [result] = await pool.query(sql, [id]);
  return result;
};
