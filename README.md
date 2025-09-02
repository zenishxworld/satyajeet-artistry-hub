# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/f2ff6106-820a-4abc-aaa0-12fbcad3648d

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f2ff6106-820a-4abc-aaa0-12fbcad3648d) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Contact Form Setup

The contact form uses only Supabase's built-in functionality - no third-party services required!

### How it works:
1. **Database Storage**: All contact form submissions are stored in the `contacts` table
2. **Edge Function**: A Supabase Edge Function processes form submissions
3. **Admin Interface**: View all submissions at `/admin` (you'll need to add this route)
4. **Logging**: Contact submissions are logged in the Edge Function console for easy monitoring

### Features:
- ✅ Pure Supabase implementation (no external dependencies)
- ✅ Automatic database storage of all submissions
- ✅ Detailed logging for each submission
- ✅ Admin interface to view and manage contacts
- ✅ Direct email links for easy follow-up

### Database:
- The `contacts` table is automatically created via migrations
- All form submissions are stored with timestamps
- Row Level Security (RLS) is configured for proper access control

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/f2ff6106-820a-4abc-aaa0-12fbcad3648d) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
