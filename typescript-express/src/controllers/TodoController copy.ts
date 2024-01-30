import { Request, Response } from "express";
import IController from "./ControllerInterface";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";


let data: any[] = [
    {id: 1, name: "bibi"},
    {id: 2, name: "yans"},
    {id: 3, name: "syah"},
    {id: 4, name: "abi"},
    {id: 5, name: "adib"}

];
class UserController implements IController{
    index(req: Request, res: Response): Response {
        console.log("ini adalah index user");
        return res.send(data);
    }

    create(req: Request, res: Response): Response {
        return res.send("berhasil menambahkan");
    }

    show(req: Request, res: Response): Response {
        return res.send("");
    }

    update(req: Request, res: Response): Response {
        return res.send("update berhasil");
    }

    delete(req: Request, res: Response): Response {
        return res.send(people);
    }
}

export default new UserController();