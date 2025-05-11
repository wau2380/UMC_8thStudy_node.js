// src/repositories/review.repository.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addReview = async ({ storeId, userId, content, star }) => {
  const newReview = await prisma.review.create({
    data: {
      storeId: storeId,
      userId: userId,
      content: content,
      star: star,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  return {
    id: newReview.id,
    content: newReview.content,
    star: newReview.star,
    created_at: newReview.createdAt,
    updated_at: newReview.updatedAt,
  };
};
