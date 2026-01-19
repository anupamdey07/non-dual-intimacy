import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];
const PUBLIC_DIR = path.join(__dirname, '../public');
const GOOGLE_DRIVE_FOLDER_ID = process.env.GDRIVE_FOLDER_ID || '';

/**
 * Authorize using service account credentials
 */
async function authorize() {
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}');

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  });

  return await auth.getClient();
}

/**
 * List all files in a Google Drive folder
 */
async function listFilesInFolder(drive, folderId) {
  try {
    const response = await drive.files.list({
      q: `'${folderId}' in parents and trashed=false and mimeType contains 'image/'`,
      fields: 'files(id, name, mimeType, modifiedTime)',
      orderBy: 'name',
    });

    return response.data.files || [];
  } catch (error) {
    console.error(`✗ Failed to list files in folder:`, error.message);
    throw error;
  }
}

/**
 * Download a file from Google Drive
 */
async function downloadFile(drive, fileId, fileName, destDir) {
  try {
    const destPath = path.join(destDir, fileName);
    const response = await drive.files.get(
      { fileId, alt: 'media' },
      { responseType: 'stream' }
    );

    return new Promise((resolve, reject) => {
      const dest = fs.createWriteStream(destPath);
      response.data
        .on('end', () => {
          console.log(`✓ Downloaded: ${fileName}`);
          resolve();
        })
        .on('error', (err) => {
          console.error(`✗ Error downloading ${fileName}:`, err);
          reject(err);
        })
        .pipe(dest);
    });
  } catch (error) {
    console.error(`✗ Failed to download file ${fileName}:`, error.message);
    throw error;
  }
}

/**
 * Sync all images from Google Drive folder
 */
async function syncFolderImages() {
  console.log('🔄 Starting Google Drive folder image sync...\n');

  if (!GOOGLE_DRIVE_FOLDER_ID) {
    console.error('❌ Error: GDRIVE_FOLDER_ID environment variable is not set.');
    console.error('Please add your Google Drive folder ID to the .env file.');
    process.exit(1);
  }

  try {
    const authClient = await authorize();
    const drive = google.drive({ version: 'v3', auth: authClient });

    // Ensure public directory exists
    if (!fs.existsSync(PUBLIC_DIR)) {
      fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }

    console.log(`📁 Scanning folder: ${GOOGLE_DRIVE_FOLDER_ID}\n`);

    // List all image files in the folder
    const files = await listFilesInFolder(drive, GOOGLE_DRIVE_FOLDER_ID);

    if (files.length === 0) {
      console.log('⚠️  No images found in the folder.');
      return;
    }

    console.log(`Found ${files.length} image(s) to sync:\n`);

    // Download each image
    for (const file of files) {
      console.log(`Downloading: ${file.name} (${file.id})`);
      await downloadFile(drive, file.id, file.name, PUBLIC_DIR);
    }

    console.log(`\n✅ Folder sync completed successfully!`);
    console.log(`📊 Total images synced: ${files.length}`);
  } catch (error) {
    console.error('\n❌ Error during sync:', error.message);
    process.exit(1);
  }
}

// Run the sync
syncFolderImages();
