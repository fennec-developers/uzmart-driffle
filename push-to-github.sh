# Initialize Git repository if not already initialized
if [ ! -d .git ]; then
  git init
  echo "Git repository initialized"
fi

# Set your GitHub repository URL (replace with your actual repository URL)
read -p "Enter your GitHub repository URL: " repo_url

# Add the remote repository
git remote add origin $repo_url || git remote set-url origin $repo_url
echo "Remote repository set to $repo_url"

# Create a new branch
read -p "Enter the name for your new branch: " branch_name
git checkout -b $branch_name
echo "Created and switched to new branch: $branch_name"

# Add all files to staging
git add .
echo "Added all files to staging"

# Commit changes
read -p "Enter a commit message: " commit_message
git commit -m "$commit_message"
echo "Changes committed"

# Push to the new branch
git push -u origin $branch_name
echo "Changes pushed to $branch_name branch on GitHub"
