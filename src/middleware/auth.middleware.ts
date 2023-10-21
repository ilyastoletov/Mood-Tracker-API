import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { checkCredsCorrect } from "src/auth/auth.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization
        const isTokenCorrect = await checkCredsCorrect(token)
        console.log(isTokenCorrect)
        if (isTokenCorrect) {
            next()
        } else {
            res.send({"code": 403, "message": "Unauthorized"})
        }
    }
}