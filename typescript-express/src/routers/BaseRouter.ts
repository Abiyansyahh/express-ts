import { Router } from "express";
import IRouter from "./Routerinterface";

abstract class BaseRoutes implements IRouter {
    public router: Router;

    constructor() {
        this.router =  Router();
        this.routes();
    }
    
    abstract routes(): void;
}

export default BaseRoutes;