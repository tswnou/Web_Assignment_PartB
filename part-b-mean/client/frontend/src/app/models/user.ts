export interface User {
  _id?: string;        // MongoDB ID
  name: string;
  email: string;
  password?: string;   // optional when returned from backend
  interests: string[];
}
