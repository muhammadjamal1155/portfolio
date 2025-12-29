# Push Your Portfolio to GitHub

Follow these simple steps to push your portfolio code to https://github.com/muhammadjamal1155/portfolio

## Method 1: Using Git Commands (Recommended)

### Step 1: Initialize Git Repository
```bash
git init
```

### Step 2: Add All Files
```bash
git add .
```

### Step 3: Commit Your Changes
```bash
git commit -m "Initial commit: Portfolio website with Next.js and Tailwind CSS"
```

### Step 4: Add Remote Repository
```bash
git remote add origin https://github.com/muhammadjamal1155/portfolio.git
```

### Step 5: Push to GitHub
```bash
git branch -M main
git push -u origin main
```

---

## Method 2: Using GitHub Desktop (Easier for Beginners)

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click "Add an Existing Repository"
4. Select your portfolio folder
5. Click "Publish repository"
6. Choose "muhammadjamal1155/portfolio" as the repository name
7. Click "Publish Repository"

---

## Method 3: Using VS Code

1. Open your portfolio folder in VS Code
2. Click on the Source Control icon (left sidebar)
3. Click "Initialize Repository"
4. Stage all changes (click the + icon)
5. Enter commit message: "Initial commit"
6. Click the "..." menu → Remote → Add Remote
7. Enter: https://github.com/muhammadjamal1155/portfolio.git
8. Click "..." → Push

---

## If Repository Already Has Content

If your GitHub repo already has files (like README), use this instead:

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/muhammadjamal1155/portfolio.git
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

## Troubleshooting

### Authentication Error?
You may need to set up a Personal Access Token:

1. Go to GitHub → Settings → Developer Settings → Personal Access Tokens
2. Generate new token (classic)
3. Select "repo" scope
4. Copy the token
5. Use it as your password when pushing

### Or use SSH:
```bash
git remote set-url origin git@github.com:muhammadjamal1155/portfolio.git
```

---

## After Pushing

Once pushed, you can deploy to Vercel:

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Import your portfolio repository
4. Click Deploy
5. Your site is live! 🚀

---

**Need Help?** Let me know if you encounter any errors!
