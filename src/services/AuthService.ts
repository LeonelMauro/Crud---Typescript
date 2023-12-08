import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class AuthService {
  async authenticate(email: string, username: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({where :{ email, username}});

    if (!user) {
      throw new Error("Credenciais inválidas");
    }
   
    
    return user;
  }
}

export { AuthService };
