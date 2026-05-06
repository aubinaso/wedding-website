# Romantic Wedding Website

A responsive wedding website built with React, Vite, and Tailwind CSS. It includes a hero invitation, story timeline, ceremony and reception details, schedule, dress code, gallery, RSVP call to action, practical information, contribution section, and footer.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Customize

- Update names, dates, venues, schedule, and RSVP link in `src/App.jsx`.
- Replace `wedding.rsvpFormLink` in `src/App.jsx` with your real Microsoft Forms, Google Forms, Typeform, or custom RSVP URL.
- Replace the Unsplash image URLs in `src/App.jsx` with your own engagement or wedding photos.
- Adjust colors and typography in `tailwind.config.js`.

## Deploy to Azure Static Web Apps

### Option 1: Azure Portal with GitHub

1. Push this project to a GitHub repository.
2. In the Azure Portal, create a new **Static Web App** resource.
3. Choose your subscription, resource group, and region.
4. Select **GitHub** as the deployment source and authorize Azure.
5. Select your repository and branch.
6. Use these build settings:
   - **App location:** `/`
   - **API location:** leave empty
   - **Output location:** `dist`
7. Finish creation. Azure will add a GitHub Actions workflow and deploy the site.

### Option 2: Azure Static Web Apps CLI

Install the CLI:

```bash
npm install -g @azure/static-web-apps-cli
```

Build the app:

```bash
npm run build
```

Deploy:

```bash
swa deploy ./dist --env production
```

## Azure Build Notes

Azure Static Web Apps should run:

```bash
npm install
npm run build
```

The generated static output is in `dist`, which is the folder Azure must publish.
