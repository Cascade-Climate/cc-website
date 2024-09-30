import { JWT } from 'google-auth-library';
import { env } from '$env/dynamic/private';

const { GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SPREADSHEET_ID } = env;

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export async function getAuthClient() {
  console.log('GOOGLE_SERVICE_ACCOUNT_EMAIL:', GOOGLE_SERVICE_ACCOUNT_EMAIL);
  console.log('GOOGLE_PRIVATE_KEY:', GOOGLE_PRIVATE_KEY ? 'Defined' : 'Undefined');
  console.log('GOOGLE_SPREADSHEET_ID:', GOOGLE_SPREADSHEET_ID);

  const key = Buffer.from(GOOGLE_PRIVATE_KEY, 'base64').toString('ascii');

  console.log("key", key)

  const auth = new JWT({
    email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: key,
    scopes: SCOPES,
  });

  await auth.authorize();
  return auth;
}