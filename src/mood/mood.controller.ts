import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CreateMoodObjectModel } from "./model/mood";
import { MoodService } from "./mood.service";

@Controller("mood")
export class MoodController {
    constructor(private readonly moodService: MoodService) {}

    @Post("create")
    async createNewMoodRecord(@Query("userId") userId: string, @Body() model: CreateMoodObjectModel) {
        return await this.moodService.create(userId, model);
    }


}