import { Injectable } from "@nestjs/common";
import * as admin from 'firebase-admin';
import { randomUUID } from "crypto";


@Injectable()
export class AuthService {

    async registerUser(hash: string) {
        const userId = randomUUID();
        try {
            await admin.firestore().collection('users').doc(userId).set({ userId: userId, credentialsHash: hash });
            return {
                message: "User successfully created",
                code: 200,
                data: {
                    status: true,
                    userId: userId,
                    hash: hash
                } 
            }    
        } catch(e) {
            return {
                message: `Server error ${e}`,
                code: 500,
                data: {
                    status: false
                }
            }    
        }
    }

    async loginUser(token: string) {
        const isValid = checkCredsCorrect(token)
        let response: Object;
        if (isValid) {
            response = {
                message: "User found",
                code: 200,
                data: true
            }
        } else {
            response = {
                message: "User not found",
                code: 200,
                data: false
            }
        }
        return response;
    }


}

export async function checkCredsCorrect(token: String) {
    const usersCollection = admin.firestore().collection('users');
    const allUsersDocs = await usersCollection.where("credentialsHash", "==", token).get();
    const isTokenValid = !allUsersDocs.empty
    return isTokenValid
}