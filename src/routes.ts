import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { GetUserDataController } from "./controllers/GetUserDataController";
import { ListUsersController } from "./controllers/ListUsersController";
import { SearchUserController } from "./controllers/SearchUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import{ ListProductController } from "./controllers/ListProducController";
import { SearchProductController } from "./controllers/SearchProductController";
import { CreateProductController } from "./controllers/CreateProductController";
import { DeleteProductController } from "./controllers/DeleteProductController";
import { GetProductController } from "./controllers/GetProductController";
import { UpdateProductController } from "./controllers/UpdateProductController";
import { AuthController } from "./controllers/AuthController";
import { CartController } from "./controllers/CartController";



const router = Router();

const cartController = new CartController();
const authController = new AuthController ();
const updateProductController = new UpdateProductController();
const getProductController = new GetProductController ();
const deleteProductController = new DeleteProductController ();
const createProductController = new CreateProductController ();
const searchProductController = new SearchProductController ();
const listProducController = new ListProductController();
const createUserController = new CreateUserController();
const searchUserController = new SearchUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const listUsersController = new ListUsersController();
const getUserDataController = new GetUserDataController();

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/add-to-cart", async (req, res) => {
  await cartController.addToCart(req, res);
});


router.post("/add-to-cart", cartController.addToCart);


router.post("/login", authController.login);

router.get("/lista", listUsersController.handle);

router.get("/products", listProducController.handle);


router.get("/add", (request, response) => {
  response.render("add");
});


router.get("/addProduct", (request, response) => {
  response.render("addProduct");
});

router.post("/add-user", createUserController.handle);

router.post("/add-product", createProductController.handle);


router.get("/search", searchUserController.handle);

router.get("/search-product", searchProductController.handle);

router.get("/edit", getUserDataController.handle);

router.get("/edit-product", getProductController.handle);

router.post("/edit-user", updateUserController.handle);

router.post("/edit-pro", updateProductController.handle);

router.post("/delete-user", deleteUserController.handle);

router.post("/delete-product", deleteProductController.handle);


router.get("/product", listUsersController.handle);


export { router };
