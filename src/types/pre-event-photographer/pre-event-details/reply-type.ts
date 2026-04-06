export type ReviewReplyType = {
  date: string;
  message: string;
};

export type ReviewType = {
  id: number;
  name: string;
  image: string;
  rating: number;
  date: string;
  title: string;
  description: string;
  reply: ReviewReplyType | null;
};