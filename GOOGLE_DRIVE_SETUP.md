# Google Drive Image Sync Setup Guide

This guide will help you set up automatic image syncing from Google Drive to your project.

## Prerequisites

- A Google Cloud Platform account
- Images stored in Google Drive
- Node.js and npm installed

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name your project (e.g., "non-dual-intimacy")
4. Click "Create"

## Step 2: Enable Google Drive API

1. In your project, go to "APIs & Services" → "Library"
2. Search for "Google Drive API"
3. Click on it and click "Enable"

## Step 3: Create a Service Account

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Fill in the details:
   - Service account name: `image-sync-service`
   - Service account ID: will auto-generate
4. Click "Create and Continue"
5. Skip the optional "Grant this service account access" step
6. Click "Done"

## Step 4: Generate Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" → "Create new key"
4. Select "JSON" format
5. Click "Create"
6. A JSON file will download - **keep this safe!**

## Step 5: Share Google Drive Files

For each image you want to sync:

1. Open Google Drive
2. Right-click on the image file
3. Click "Share"
4. Add your service account email (looks like: `image-sync-service@your-project.iam.gserviceaccount.com`)
5. Set permission to "Viewer"
6. Click "Send"

## Step 6: Get Google Drive File IDs

For each image:

1. Right-click on the file in Google Drive
2. Click "Get link"
3. The URL will look like: `https://drive.google.com/file/d/1ABC123xyz/view`
4. The file ID is the part between `/d/` and `/view`: `1ABC123xyz`

## Step 7: Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and fill in:
   - `GOOGLE_SERVICE_ACCOUNT_KEY`: Paste the **entire contents** of the JSON file from Step 4 (as a single-line string)
   - `GDRIVE_FRAGILE_SILENCE_ID`: File ID for Fragile Silence image
   - `GDRIVE_GENTLE_PRESENCE_ID`: File ID for Gentle Presence image
   - `GDRIVE_EARTH_TEXTURES_ID`: File ID for Earth Textures image

Example `.env`:
```env
GOOGLE_SERVICE_ACCOUNT_KEY='{"type":"service_account","project_id":"non-dual-intimacy-123456","private_key_id":"abc123","private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n","client_email":"image-sync-service@non-dual-intimacy-123456.iam.gserviceaccount.com",...}'

GDRIVE_FRAGILE_SILENCE_ID=1ABC123xyz
GDRIVE_GENTLE_PRESENCE_ID=1DEF456abc
GDRIVE_EARTH_TEXTURES_ID=1GHI789def
```

## Step 8: Run the Sync

Now you can sync images from Google Drive:

```bash
npm run sync-images
```

This will:
- Connect to Google Drive using your service account
- Download the three images
- Save them to the `public/` folder with the correct filenames
- Replace existing images

## Automation Options

### Option 1: Manual Sync
Run `npm run sync-images` whenever you update images in Google Drive

### Option 2: GitHub Actions (Scheduled)
Add a GitHub Action to sync images daily/weekly:

Create `.github/workflows/sync-images.yml`:
```yaml
name: Sync Google Drive Images

on:
  schedule:
    - cron: '0 0 * * 0'  # Every Sunday at midnight
  workflow_dispatch:  # Allow manual trigger

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run sync-images
        env:
          GOOGLE_SERVICE_ACCOUNT_KEY: ${{ secrets.GOOGLE_SERVICE_ACCOUNT_KEY }}
          GDRIVE_FRAGILE_SILENCE_ID: ${{ secrets.GDRIVE_FRAGILE_SILENCE_ID }}
          GDRIVE_GENTLE_PRESENCE_ID: ${{ secrets.GDRIVE_GENTLE_PRESENCE_ID }}
          GDRIVE_EARTH_TEXTURES_ID: ${{ secrets.GDRIVE_EARTH_TEXTURES_ID }}
      - name: Commit changes
        run: |
          git config --global user.name 'GitHub Action'
          git config --global user.email 'action@github.com'
          git add public/
          git commit -m "Sync images from Google Drive" || echo "No changes"
          git push
```

Then add your environment variables as GitHub Secrets:
1. Go to your GitHub repo → Settings → Secrets and variables → Actions
2. Add each environment variable as a secret

### Option 3: Pre-Build Hook
Sync images before every build by updating `package.json`:

```json
"scripts": {
  "prebuild": "npm run sync-images",
  "build": "tsc -b && vite build"
}
```

## Troubleshooting

### Error: "File not found"
- Make sure you've shared the file with your service account email
- Verify the file ID is correct

### Error: "Invalid credentials"
- Check that your service account JSON is correctly formatted in `.env`
- Make sure there are no extra spaces or line breaks

### Error: "Permission denied"
- Ensure the service account has "Viewer" access to each file
- Check that Google Drive API is enabled in your project

## Security Notes

- **Never commit your `.env` file** - it's already in `.gitignore`
- Keep your service account JSON key secure
- Use GitHub Secrets for CI/CD automation
- Limit service account permissions to read-only access

## Image File Mapping

The sync script maps Google Drive files to these local files:

- Fragile Silence → `public/photo_silence_1768770430061.png`
- Gentle Presence → `public/photo_presence_1768770445656.png`
- Earth Textures → `public/photo_texture_1768770457741.png`

To add more images, edit `scripts/syncGoogleDriveImages.js`:

```javascript
const IMAGE_MAPPING = {
  'new-project': process.env.GDRIVE_NEW_PROJECT_ID || '',
  // ... existing mappings
};

const OUTPUT_MAPPING = {
  'new-project': 'photo_new_project.png',
  // ... existing mappings
};
```
