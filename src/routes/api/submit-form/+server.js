import { json } from '@sveltejs/kit';
import { google } from 'googleapis';
import { getAuthClient } from '$lib/googleSheetsAuth';
import { env } from '$env/dynamic/private';

const { GOOGLE_SPREADSHEET_ID } = env;

export async function POST({ request }) {
	try {
		const formData = await request.json();
		const auth = await getAuthClient();
		const sheets = google.sheets({ version: 'v4', auth });

		await sheets.spreadsheets.values.append({
			spreadsheetId: GOOGLE_SPREADSHEET_ID,
			range: 'Sheet1!A:Z',
			valueInputOption: 'USER_ENTERED',
			resource: {
				values: [[formData.name, formData.email, formData.message, new Date().toISOString()]]
			}
		});

		return json({ success: true, message: 'Form data submitted successfully' });
	} catch (error) {
		console.error('Error submitting form data:', error);
		return json({ success: false, message: 'Error submitting form data' }, { status: 500 });
	}
}
