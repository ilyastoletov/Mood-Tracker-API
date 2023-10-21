import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AuthMiddleware } from "src/middleware/auth.middleware";
import { MoodController } from "./mood.controller";
import { MoodService } from "./mood.service";

@Module({
    controllers: [MoodController],
    providers: [MoodService]
})
export class MoodModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes("mood")
    }
}