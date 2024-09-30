import { json } from '@sveltejs/kit';
import { getAccessToken } from '$lib/googleSheetsAuth';
import { env } from '$env/dynamic/private';

const { GOOGLE_SPREADSHEET_ID } = env;

export async function POST({ request }) {
	try {
		const formData = await request.json();
		const accessToken = await getAccessToken();

		const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SPREADSHEET_ID}/values/Sheet1!A:Z:append?valueInputOption=USER_ENTERED`, {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${accessToken}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				values: [[formData.name, formData.email, formData.message, new Date().toISOString()]]
			})
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return json({ success: true, message: 'Form data submitted successfully' });
	} catch (error) {
		console.error('Error submitting form data:', error);
		return json({ success: false, message: 'Error submitting form data' }, { status: 500 });
	}
}
