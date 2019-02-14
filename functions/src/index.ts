import * as admin from 'firebase-admin';
admin.initializeApp();

///// Email /////

export { sendContactEmail } from './email/email';
