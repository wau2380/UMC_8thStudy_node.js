import { addReview } from "../repositories/review.repository.js";

export const createReview = async (storeId, reviewData) => {
  return await addReview({
    storeId,
    userId: reviewData.userId,
    content: reviewData.content,
    star: reviewData.star,
  });
};
