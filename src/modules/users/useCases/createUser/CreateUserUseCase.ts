import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  private usersRepository: IUsersRepository;
  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ email, name }: IRequest): User {
    const emailIsAlreadyTaken = this.usersRepository.findByEmail(email);

    if (emailIsAlreadyTaken) {
      throw new Error("Email is already being used");
    }

    const user = this.usersRepository.create({ email, name });

    return user;
  }
}

export { CreateUserUseCase };
