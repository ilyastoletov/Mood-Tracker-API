import { Body, Controller, Get, Header, Post, Query } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterCredentials } from "./model/auth";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("register")
    async register(@Query("hash") hashString: string) {
        return await this.authService.registerUser(hashString);
    }

    @Get("login")
    async login(@Query('token') token: string) {
        return await this.authService.loginUser(token);
    }

}