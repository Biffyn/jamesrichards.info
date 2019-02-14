import * as functions from 'firebase-functions';
import * as sendgrid from '@sendgrid/mail';
sendgrid.setApiKey(functions.config().sendgrid.key);
sendgrid.setSubstitutionWrappers('{{', '}}');
import * as cors from 'cors';
const corsHandler = cors({ origin: true });
const sgMail = sendgrid;

export const sendContactEmail = functions.https.onRequest(
  (req: functions.Request, res: functions.Response) => {
    corsHandler(req, res, () => {
      const contactName = req.body.name;
      const contactEmail = req.body.email;
      const contactSubject = req.body.subject;
      const contactMessage = req.body.message;

      const msg = {
        to: 'nuravenweb@gmail.com',
        from: { name: 'JamesRichards.io', email: 'noreply@jamesrichards.io' },
        reply_to: { email: contactEmail, name: contactName },
        subject: `[Contact Form]: ${contactSubject}`,
        templateId: 'd-81aa2df344a6498da6a7e39b8c0db75f',
        dynamicTemplateData: {
          name: contactName,
          email: contactEmail,
          subject: contactSubject,
          message: contactMessage
        }
      };

      return sgMail
        .send(msg)
        .then(() => {
          console.log('Email was successfully sent');
          return res.status(200).send({ message: 'Message successfully sent!' });
        })
        .catch((error) => {
          console.error(error);
          return res.status(400).send(error);
        });
    });
  }
);
