import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class AuthService {
  async authenticate(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw new Error("Credenciais inválidas");
    }

    return user;
  }
}

export { AuthService };
