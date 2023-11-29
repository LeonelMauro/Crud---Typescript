// AuthController.ts

import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email } = req.body;
      const authService = new AuthService();  // Asegúrate de que estás importando el servicio correcto
      const user = await authService.authenticate(email);

      res.redirect("/");

      // Puedes agregar más lógica aquí, como verificar la contraseña si es necesario

      res.status(200).json({ message: "Inicio de sesión exitoso", user });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
}

export { AuthController };
