import { Request, Response } from "express";
import { SearchProductService } from "../services/SearchProductService";

class SearchProductController {
  async handle(request: Request, response: Response) {
    let { search } = request.query;
    search = search.toString();

    const searchProductService = new SearchProductService();

    try {
      const product = await searchProductService.search(search);
      response.render("search", {
        products: product,
        search: search
      });
    } catch (err) {
      response.render("message", {
        message: `Erro ao buscar usuário: ${err.message}`
      });
    }
  }
}

export { SearchProductController };
