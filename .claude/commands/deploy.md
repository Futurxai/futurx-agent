# Deploy

Deploy the current project. Follow this checklist:

1. **Pre-flight checks**
   - Run `git status` — ensure working tree is clean
   - Run tests — all must pass
   - Run build — must succeed with no errors

2. **Build**
   - Run the project's build command
   - Verify output artifacts exist

3. **Deploy**
   - Use the project's deploy method (Firebase, Vercel, Docker, etc.)
   - Confirm deployment URL is accessible

4. **Post-deploy**
   - Verify the deployed version matches the latest commit
   - Report the deployment URL and status

Always ask for confirmation before pushing to production.
