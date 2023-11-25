import { Request, Response } from "express";
import { SearchProductService } from "../services/SearchProductService";

class SearchProductController {
  async handle(request: Request, response: Response) {
    let { search } = request.query;
    search = search.toString();

    const searchProductService = new SearchProductService();

    try {
      const products = await searchProductService.search(search);
      response.render("search-product", {
        products :products,
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
