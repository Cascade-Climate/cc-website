import { env } from '$env/dynamic/private';
import * as jose from 'jose';

const { GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY } = env;

export async function getAccessToken() {
  const privateKey = atob(GOOGLE_PRIVATE_KEY);

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  const alg = 'RS256';
  const privateJwk = await jose.importPKCS8(privateKey, alg);

  const jwt = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg })
    .sign(privateJwk);

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });

  const data = await response.json();
  return data.access_token;
}