// AuthController.ts

import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

class AuthController {
  
  async login(req: Request, res: Response) {
    const { email, username } = req.body;
    const authService = new AuthService();  
    try {  
      const user = await authService.authenticate(email,username);
      res.render("message", {
        message: "Inicio de Sesión OK.!",
      });


      res.redirect("/");
      
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
}

export { AuthController };
