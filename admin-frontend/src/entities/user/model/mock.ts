import type { User } from "./types";

export const mockUsers: User[] = [
  {
    userId: "1",
    login: "john_doe",
    firstName: "John",
    lastName: "Doe",
    isSeller: true,
    createdAt: "2024-01-01",
  },
  {
    userId: "2",
    login: "jane_smith",
    firstName: "Jane",
    lastName: "Smith",
    isSeller: false,
    createdAt: "2024-02-10",
  },
  {
    userId: "3",
    login: "alex",
    firstName: null,
    lastName: null,
    isSeller: false,
    createdAt: "2024-03-15",
  },
];