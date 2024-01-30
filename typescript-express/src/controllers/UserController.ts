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
        const {id, name } = req.body;

        data.push({ id, name });

        return res.send("berhasil menambahkan");
    }

    show(req: Request, res: Response): Response {
        const { id } = req.params;

        let person = data.find(item => item.id == id);
        return res.send(person);
    }

    update(req: Request, res: Response): Response {
        const { id } = req.params;
        const { name } = req.body;

        let person = data.find(item => item.id == id);
        person.name = name;

        return res.send("update berhasil");
    }

    delete(req: Request, res: Response): Response {
        const { id } = req.params;

        let people = data.filter(item => item.id != id);
        return res.send(people);
    }
}

export default new UserController();