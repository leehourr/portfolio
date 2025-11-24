# CI/CD Setup Instructions for Firebase Hosting

## Overview

This project uses GitHub Actions for automatic deployment to Firebase Hosting.

## Workflows Created

### 1. **firebase-hosting-merge.yml**

- Triggers on push to `main` branch
- Builds and deploys to production (live channel)

### 2. **firebase-hosting-pull-request.yml**

- Triggers on pull requests
- Creates preview deployments for testing

## Setup Steps

### 1. Get Firebase Service Account Key

Run this command to generate a service account key:

```bash
firebase init hosting:github
```

This will:

- Guide you through connecting your GitHub repository
- Automatically create the GitHub Actions workflows
- Set up the required GitHub secrets

**OR** manually set up:

```bash
# Generate a service account key
firebase projects:addsdk
```

### 2. Add GitHub Secret

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `FIREBASE_SERVICE_ACCOUNT_MACOS_PORTFOLIO`
5. Value: Paste the service account JSON key
6. Click **Add secret**

### 3. Update Project ID (if needed)

If your Firebase project ID is different from `macos-portfolio`, update it in:

- `.github/workflows/firebase-hosting-merge.yml`
- `.github/workflows/firebase-hosting-pull-request.yml`

Change the `projectId` field to match your Firebase project.

### 4. Verify Setup

1. Commit and push the workflow files:

```bash
git add .github/workflows/
git commit -m "Add Firebase CI/CD workflows"
git push
```

2. Check the **Actions** tab in your GitHub repository
3. You should see the workflow running automatically

## How It Works

### On Push to Main

1. Code is pushed to `main` branch
2. GitHub Actions triggers
3. Dependencies are installed
4. Project is built (`npm run build`)
5. Built files are deployed to Firebase Hosting (live)

### On Pull Request

1. Pull request is created
2. GitHub Actions triggers
3. Dependencies are installed
4. Project is built
5. Preview URL is created and commented on the PR

## Manual Deployment

You can still deploy manually using:

```bash
npm run build
firebase deploy --only hosting
```

## Troubleshooting

### Build Fails

- Check Node.js version (should be 20)
- Verify all dependencies are in `package.json`
- Check build logs in GitHub Actions

### Deployment Fails

- Verify Firebase service account secret is set correctly
- Check Firebase project ID matches
- Ensure Firebase Hosting is enabled in your project

### Preview Deployments Not Working

- Ensure the PR is from the same repository (not a fork)
- Check that the service account has proper permissions

## Environment Variables

If you need environment variables:

1. Add them to GitHub Secrets
2. Reference them in the workflow:

```yaml
- name: Build
  run: npm run build
  env:
    VITE_API_KEY: ${{ secrets.VITE_API_KEY }}
```

## Resources

- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Firebase GitHub Action](https://github.com/FirebaseExtended/action-hosting-deploy)
