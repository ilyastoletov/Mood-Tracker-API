import { Injectable } from "@nestjs/common";
import { CreateMoodObjectModel } from "./model/mood";
import * as admin from 'firebase-admin';
import { randomUUID } from "crypto";

@Injectable()
export class MoodService {

    async create(userId: string, model: CreateMoodObjectModel) {
        const docUUID = randomUUID();
        try {
            await admin
            .firestore()
            .collection('mood')
            .doc(docUUID)
            .set(
                {
                    text: model.text,
                    moodType: model.moodType,
                    userId: userId
                });
            return {"code": 200, "message": "Mood created"}
        } catch(e) {
            return {"code": 500, "message": `server error: ${e}`}
        }
    }

    async getAllUserRecords(userId: string) {
        const allMoodDocs = admin.firestore().collection('mood');
        const userMoodRecords = await allMoodDocs.where("userId", "==", userId).get();
        return userMoodRecords.docs
    }

}