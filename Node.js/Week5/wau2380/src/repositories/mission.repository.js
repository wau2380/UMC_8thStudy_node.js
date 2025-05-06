import { pool } from "../db.config.js";
 
export const createMission = async (storeId, content, deadline, point) => {
  const query = `
    INSERT INTO missions (store_id, content, deadline, point)
    VALUES (?, ?, ?, ?)
  `;
  const [result] = await pool.query(query, [storeId, content, deadline, point]);
  return result.insertId;
};
