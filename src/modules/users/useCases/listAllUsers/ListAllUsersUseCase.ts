import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const admin = this.usersRepository.findById(user_id);

    if (!admin) {
      throw new Error("user not found");
    }

    if (admin && admin.admin) {
      const users = this.usersRepository.list();
      return users;
    }

    throw new Error("user not admin");
  }
}

export { ListAllUsersUseCase };
