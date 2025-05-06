import { pool } from "../db.config.js";

export const createChallenge = async (missionId, userId) => {
  const query = `
    INSERT INTO challenges (mission_id, user_id)
    VALUES (?, ?)
  `;
  const [result] = await pool.query(query, [missionId, userId]);
  return result.insertId;
};
