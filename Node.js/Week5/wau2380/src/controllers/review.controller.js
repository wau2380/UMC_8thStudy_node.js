import { createReview } from "../services/review.service.js";

export const postReview = async (req, res) => {
  try {
    const storeId = req.params.storeId;
    const review = await createReview(storeId, req.body);

    res.status(201).json({
      result: {
        reviewId: review,
      },
    });
  } catch (err) {
    console.error("리뷰 등록 실패:", err.message);
    res.status(500).json({ message: "리뷰 등록 중 오류 발생" });
  }
};
