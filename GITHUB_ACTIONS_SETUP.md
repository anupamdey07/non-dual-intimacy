# GitHub Actions Automatic Image Sync Setup

This guide explains how to set up automatic image syncing from Google Drive using GitHub Actions.

## Overview

The GitHub Actions workflow automatically:
- Runs every Sunday at midnight UTC
- Can be triggered manually from GitHub
- Syncs images from Google Drive to your repository
- Commits and pushes changes automatically

## Setting Up GitHub Secrets

To enable automatic syncing, you need to add your Google Drive credentials as GitHub Secrets.

### Step 1: Go to Repository Settings

1. Go to your GitHub repository
2. Click on **Settings** (top navigation)
3. In the left sidebar, click **Secrets and variables** → **Actions**

### Step 2: Add Secrets

Click **New repository secret** for each of the following:

#### Secret 1: GOOGLE_SERVICE_ACCOUNT_KEY

- **Name**: `GOOGLE_SERVICE_ACCOUNT_KEY`
- **Value**: Your entire service account JSON key (the same one from your `.env` file)
- Click **Add secret**

Example value format:
```json
{"type":"service_account","project_id":"non-dual-intimacy","private_key_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n","client_email":"...@....iam.gserviceaccount.com",...}
```

#### Secret 2: GDRIVE_FRAGILE_SILENCE_ID

- **Name**: `GDRIVE_FRAGILE_SILENCE_ID`
- **Value**: `1nzeHBPeWn_pJ4jkmQSkXh9MbFNqi253p` (or your file ID)
- Click **Add secret**

#### Secret 3: GDRIVE_GENTLE_PRESENCE_ID

- **Name**: `GDRIVE_GENTLE_PRESENCE_ID`
- **Value**: `1nzeHBPeWn_pJ4jkmQSkXh9MbFNqi253p` (or your file ID)
- Click **Add secret**

#### Secret 4: GDRIVE_EARTH_TEXTURES_ID

- **Name**: `GDRIVE_EARTH_TEXTURES_ID`
- **Value**: `1bdQMrltBtzWy3BDZrElbZIVz9UlEMHR7` (or your file ID)
- Click **Add secret**

### Step 3: Verify Secrets

After adding all secrets, you should see:
- ✅ GOOGLE_SERVICE_ACCOUNT_KEY
- ✅ GDRIVE_FRAGILE_SILENCE_ID
- ✅ GDRIVE_GENTLE_PRESENCE_ID
- ✅ GDRIVE_EARTH_TEXTURES_ID

## Manual Trigger

To manually trigger the sync:

1. Go to your repository on GitHub
2. Click **Actions** tab
3. Select **Sync Google Drive Images** workflow (left sidebar)
4. Click **Run workflow** button (right side)
5. Click the green **Run workflow** button in the dropdown

## Automatic Schedule

The workflow runs automatically:
- **Every Sunday at midnight UTC** (12:00 AM UTC)
- To change the schedule, edit `.github/workflows/sync-images.yml`:
  ```yaml
  schedule:
    - cron: '0 0 * * 0'  # Change this line
  ```

### Common Cron Schedules:

- Daily at midnight: `'0 0 * * *'`
- Every 6 hours: `'0 */6 * * *'`
- Every Monday at 9 AM: `'0 9 * * 1'`
- First day of every month: `'0 0 1 * *'`

Learn more: [Crontab Guru](https://crontab.guru/)

## How It Works

1. **Trigger**: Workflow starts (scheduled or manual)
2. **Checkout**: Downloads your repository code
3. **Setup**: Installs Node.js and dependencies
4. **Sync**: Runs `npm run sync-images` to download from Google Drive
5. **Check**: Detects if any images changed
6. **Commit**: If changes detected, commits with message `🖼️ Auto-sync images from Google Drive [skip ci]`
7. **Push**: Pushes changes to your repository

**Note**: The `[skip ci]` tag prevents infinite loops by not triggering another workflow run.

## Adding More Images

### Option 1: Add Individual File IDs (Current Method)

1. Add new file ID to `.env`:
   ```env
   GDRIVE_NEW_PROJECT_ID=your_new_file_id
   ```

2. Update `scripts/syncGoogleDriveImages.js`:
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

3. Add new GitHub Secret:
   - Name: `GDRIVE_NEW_PROJECT_ID`
   - Value: Your new file ID

4. Update `.github/workflows/sync-images.yml`:
   ```yaml
   env:
     GDRIVE_NEW_PROJECT_ID: ${{ secrets.GDRIVE_NEW_PROJECT_ID }}
   ```

### Option 2: Sync Entire Folder (Easier for Multiple Images)

**New feature!** Automatically sync all images from a Google Drive folder.

1. Create a folder in Google Drive with all your images
2. Share the folder with your service account email
3. Get the folder ID from the URL:
   - URL: `https://drive.google.com/drive/folders/1ABC123xyz`
   - Folder ID: `1ABC123xyz`

4. Add to `.env`:
   ```env
   GDRIVE_FOLDER_ID=1ABC123xyz
   ```

5. Add GitHub Secret:
   - Name: `GDRIVE_FOLDER_ID`
   - Value: Your folder ID

6. Update workflow to use folder sync:
   ```yaml
   - name: Sync images from Google Drive
     run: npm run sync-folder  # Changed from sync-images
     env:
       GOOGLE_SERVICE_ACCOUNT_KEY: ${{ secrets.GOOGLE_SERVICE_ACCOUNT_KEY }}
       GDRIVE_FOLDER_ID: ${{ secrets.GDRIVE_FOLDER_ID }}
   ```

**Benefits of folder sync:**
- Add/remove images without code changes
- Images automatically use their original filenames
- Easier to manage multiple images

## Monitoring

### Check Workflow Status

1. Go to **Actions** tab
2. See recent workflow runs
3. Click on any run to see detailed logs

### Troubleshooting

**Workflow fails with "Permission denied":**
- Verify all secrets are added correctly
- Check that files are shared with service account

**No changes committed:**
- Images haven't changed in Google Drive
- Check workflow logs for errors

**Images not updating on website:**
- Clear browser cache
- Check that filenames match what's used in components

## Security Notes

- Never commit `.env` file (already in `.gitignore`)
- Secrets are encrypted and only visible to workflow
- Use GitHub Secrets for all sensitive data
- Limit service account to read-only access

## Testing

To test locally before pushing:

```bash
# Test individual file sync
npm run sync-images

# Test folder sync
npm run sync-folder
```

## Need Help?

- Check the [main setup guide](./GOOGLE_DRIVE_SETUP.md)
- Review [workflow file](./.github/workflows/sync-images.yml)
- Check [GitHub Actions logs](../../actions)
