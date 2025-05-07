export const bodyToUser = (body) => {
    const birth = new Date(body.birth);
  
    return {
      email: body.email,
      name: body.name,
      gender: body.gender,
      birth,
      address: body.address || "",
      detailAddress: body.detailAddress || "",
      phoneNumber: body.phoneNumber,
      preferences: body.preferences,
    };
  };

  // user.dto.js

export const responseFromUser = ({ user, preferences }) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    gender: user.gender,
    birth: user.birth?.toISOString().split("T")[0] || null,  // 날짜 형식 변환
    address: user.address,
    detailAddress: user.detailAddress,
    phoneNumber: user.phoneNumber,
    preferences: preferences || [],
  };
};
