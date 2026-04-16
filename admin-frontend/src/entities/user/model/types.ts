export type User = {
  userId: string;
  login: string;
  firstName?: string | null;
  lastName?: string | null;
  isSeller: boolean;
  createdAt: string;
};