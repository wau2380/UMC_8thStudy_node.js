import { pool } from "../db.config.js";


export const addReview = async ({ storeId, userId, content, star }) => {
  const sql = `
    INSERT INTO reviews (store_id, user_id, content, star)
    VALUES (?, ?, ?, ?)
  `;
  const [result] = await pool.query(sql, [storeId, userId, content, star]);

  return {
    id: result.insertId,
    content,
    star,
    created_at: new Date(),
    updated_at: new Date(),
  };
};

