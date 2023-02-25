import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;
  name: string;
  email: string;

  constructor(user?: User) {
    if (!user) {
      this.id = uuidV4();
      this.admin = false;
      this.created_at = new Date();
      this.updated_at = new Date();
    } else {
      Object.assign(this, user);
    }
  }
}

export { User };
