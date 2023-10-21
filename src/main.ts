import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const serviceAccount = require('../service_account_creds.json');
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
  await app.listen(3000);
}

bootstrap();
