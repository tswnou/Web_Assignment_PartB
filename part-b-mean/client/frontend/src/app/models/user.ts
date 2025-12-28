export interface User {
  _id?: string;        // MongoDB ID
  name: string;
  email: string;
  password?: string;   
  interests: string[];
}
