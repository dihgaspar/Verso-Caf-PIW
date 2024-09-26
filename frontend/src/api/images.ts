export const getImageUrl = (imagePath: string): string => {
  const baseUrl = "http://localhost:3000";

  return `${baseUrl}/${imagePath}`;
};
