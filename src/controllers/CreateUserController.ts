import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, email, telefone, cidade, estado } = request.body;

    const createUserService = new CreateUserService();

    try {
      await createUserService.create({
        username,
        email,
        telefone,
        cidade,
        estado
      }).then(() => {
        response.render("message", {
          message: "Usuário creado correctamente"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Error al crear usuário: ${err.message}`
      });
    }

  }
}

export { CreateUserController };