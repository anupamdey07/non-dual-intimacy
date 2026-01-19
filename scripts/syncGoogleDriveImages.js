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

// Image mapping - maps Google Drive file IDs to local filenames
const IMAGE_MAPPING = {
  'fragile-silence': process.env.GDRIVE_FRAGILE_SILENCE_ID || '',
  'gentle-presence': process.env.GDRIVE_GENTLE_PRESENCE_ID || '',
  'earth-textures': process.env.GDRIVE_EARTH_TEXTURES_ID || '',
};

const OUTPUT_MAPPING = {
  'fragile-silence': 'photo_silence_1768770430061.png',
  'gentle-presence': 'photo_presence_1768770445656.png',
  'earth-textures': 'photo_texture_1768770457741.png',
};

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
 * Download a file from Google Drive
 */
async function downloadFile(drive, fileId, destPath) {
  try {
    const response = await drive.files.get(
      { fileId, alt: 'media' },
      { responseType: 'stream' }
    );

    return new Promise((resolve, reject) => {
      const dest = fs.createWriteStream(destPath);
      response.data
        .on('end', () => {
          console.log(`✓ Downloaded: ${path.basename(destPath)}`);
          resolve();
        })
        .on('error', (err) => {
          console.error(`✗ Error downloading ${path.basename(destPath)}:`, err);
          reject(err);
        })
        .pipe(dest);
    });
  } catch (error) {
    console.error(`✗ Failed to download file ${fileId}:`, error.message);
    throw error;
  }
}

/**
 * Sync all images from Google Drive
 */
async function syncImages() {
  console.log('🔄 Starting Google Drive image sync...\n');

  try {
    const authClient = await authorize();
    const drive = google.drive({ version: 'v3', auth: authClient });

    // Ensure public directory exists
    if (!fs.existsSync(PUBLIC_DIR)) {
      fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }

    // Download each image
    for (const [key, fileId] of Object.entries(IMAGE_MAPPING)) {
      if (!fileId) {
        console.log(`⚠ Skipping ${key}: No file ID configured`);
        continue;
      }

      const outputFile = OUTPUT_MAPPING[key];
      const destPath = path.join(PUBLIC_DIR, outputFile);

      console.log(`Downloading ${key}...`);
      await downloadFile(drive, fileId, destPath);
    }

    console.log('\n✅ Image sync completed successfully!');
  } catch (error) {
    console.error('\n❌ Error during sync:', error.message);
    process.exit(1);
  }
}

// Run the sync
syncImages();
