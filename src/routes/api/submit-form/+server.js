import { json } from '@sveltejs/kit';
import { getAccessToken } from '$lib/googleSheetsAuth';
import { env } from '$env/dynamic/private';

const { GOOGLE_SPREADSHEET_ID } = env;

export async function POST({ request }) {
	try {
		const formData = await request.json();
		const accessToken = await getAccessToken();
		console.log(formData);

		const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SPREADSHEET_ID}/values/Sheet1!A:Z:append?valueInputOption=USER_ENTERED`, {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${accessToken}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				values: [[formData.email,formData.first_name, formData.last_name, formData.title, formData.organization, formData.link, new Date().toISOString()]]
			})
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return json({ success: true, message: 'Form data submitted successfully' });
	} catch (error) {
		console.error('Error submitting form data:', error);
		return json({ success: false, message: error.message + ' ' + error.stack }, { status: 500 });
	}
}
