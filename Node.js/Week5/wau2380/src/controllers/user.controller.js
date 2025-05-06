import { StatusCodes } from "http-status-codes";
import { bodyToUser } from "../dtos/user.dto.js";
import { userSignUp } from "../services/user.service.js";
import { registerMission } from "../services/mission.service.js"; // ⬅️ 추가

export const handleUserSignUp = async (req, res, next) => {
  try {
    console.log("회원가입을 요청했습니다!");
    console.log("body:", req.body);

    const user = await userSignUp(bodyToUser(req.body));
    res.status(StatusCodes.CREATED).json({ result: user });
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "회원가입 중 오류 발생",
    });
  }
};


// ✅ 새로운 미션 등록 컨트롤러
export const handleMissionCreate = async (req, res, next) => {
  console.log("미션 등록을 요청했습니다!");
  console.log("params:", req.params);
  console.log("body:", req.body);

  const storeId = parseInt(req.params.storeId, 10);
  const { content, deadline, point } = req.body;

  const mission = await registerMission(storeId, content, deadline, point);
  res.status(StatusCodes.CREATED).json({ result: mission });
};

import { registerChallenge } from "../services/challenge.service.js";

export const handleChallengeCreate = async (req, res, next) => {
  try {
    const missionId = parseInt(req.params.missionId, 10);
    const { userId } = req.body;

    const challenge = await registerChallenge(missionId, userId);
    res.status(201).json({ result: challenge });
  } catch (err) {
    console.error("❌ 챌린지 등록 오류:", err);
    res.status(500).json({ message: "챌린지 등록 중 오류 발생" });
  }
};
