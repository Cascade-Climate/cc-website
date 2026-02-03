/**
 * Updates title metadata in CRN EOI PDFs so the tab shows the doc name
 * instead of "[DO NOT EDIT] CRN EOI Solicitation Materials".
 * Run: node scripts/update-crn-pdf-metadata.mjs
 */

import { PDFDocument } from 'pdf-lib';
import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const staticDir = join(__dirname, '..', 'static');

const docs = [
  {
    file: 'Cascade Climate_CRN_EOI_Site_Selection_Criteria.pdf',
    title: 'Site Selection Criteria - Cascade Climate'
  },
  {
    file: 'Cascade Climate_CRN_EOI_Conflict of Interest_Policy.pdf',
    title: 'Conflict of Interest Policy - Cascade Climate'
  }
];

for (const { file, title } of docs) {
  const path = join(staticDir, file);
  console.log(`Updating ${file} -> title: "${title}"`);
  const bytes = await readFile(path);
  const pdfDoc = await PDFDocument.load(bytes);
  pdfDoc.setTitle(title);
  const saved = await pdfDoc.save();
  await writeFile(path, saved);
  console.log(`  Done.`);
}

console.log('All PDF metadata updated.');
