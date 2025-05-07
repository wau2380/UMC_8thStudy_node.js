import { createChallenge } from "../repositories/challenge.repository.js";

export const registerChallenge = async (missionId, userId) => {
  const challengeId = await createChallenge(missionId, userId);
  return {
    id: challengeId,
    missionId,
    userId,
    status: "진행중"
  };
};
