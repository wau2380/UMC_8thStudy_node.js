import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { handleUserSignUp } from "./controllers/user.controller.js";
import { handleMissionCreate } from "./controllers/user.controller.js";
import { handleChallengeCreate } from "./controllers/user.controller.js";


import { postReview } from "./controllers/review.controller.js"; // ✅ 리뷰 핸들러 import

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/v1/users/signup", handleUserSignUp);


app.post("/api/v1/reviews/stores/:storeId", postReview);

app.listen(port, () => {
  console.log(`✅ Example app listening on port ${port}`);
});

app.post("/api/v1/missions/:missionId/challenges", handleChallengeCreate);


app.post("/api/v1/users/signup", handleUserSignUp);
app.post("/api/v1/missions/stores/:storeId", handleMissionCreate);
