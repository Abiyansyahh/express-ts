import BaseRoutes from "./BaseRouter";
import AuthController from "../controllers/AuthController";
import validate from "../middlewares/AuthValidator";
import { auth } from"../middlewares/AuthMiddleware";


class AuthRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post("/register", validate, AuthController.register);
        this.router.post("/login", validate, AuthController.login);
        this.router.get("/profile", auth, AuthController.profile);
    }
}

export default new AuthRoutes().router;