import * as MissionRepository from "../repositories/mission.repository.js";

export const registerMission = async (storeId, content, deadline, point) => {
  const missionId = await MissionRepository.createMission(storeId, content, deadline, point);
  return {
    id: missionId,
    content,
    deadline,
    point,
    status: "대기 중",
  };
};
