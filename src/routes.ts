import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { GetUserDataController } from "./controllers/GetUserDataController";
import { ListUsersController } from "./controllers/ListUsersController";
import { SearchUserController } from "./controllers/SearchUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import{ ListProductController } from "./controllers/ListProducController";
import { SearchProductController } from "./controllers/SearchProductController"
import { CreateProductController } from "./controllers/CreateProductController"
import { DeleteProductController } from "./controllers/DeleteProductController"

const router = Router();

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

router.get("/", listUsersController.handle);

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

router.post("/edit-user", updateUserController.handle);

router.post("/delete-user", deleteUserController.handle);

router.post("/delete-product", deleteProductController.handle);


router.get("/product", listUsersController.handle);


export { router };
