# Axel & Aivi Wedding Website

React + Vite + Tailwind CSS wedding website for Axel & Aivi. The visual identity uses a refined teal, champagne, ivory, gold, soft white, and dark text palette with oval frames, botanical line art, and faith-inspired details.

## How to Update the Wedding Website

Most content is centralized in `src/App.jsx` inside the `wedding` configuration object near the top of the file.

### 1. Update the RSVP Google Form link

In `src/App.jsx`, update:

```js
rsvpLink: "https://forms.gle/X6uTjDfS6XoWH4VQ9"
```

### 2. Update the ceremony and reception addresses

In `src/App.jsx`, update:

```js
ceremony: {
  location: "Lieu à préciser",
  address: "Adresse à préciser"
},
reception: {
  location: "Lieu de réception à préciser",
  address: "Adresse à préciser"
}
```

### 3. Update Google Maps links

Replace the placeholder map links:

```js
ceremony: {
  mapLink: "#map-link-to-update"
},
reception: {
  mapLink: "#reception-map-link-to-update"
}
```

### 4. Update the cagnotte link

```js
support: {
  moneyPotLink: "#cagnotte-link-to-update"
}
```

### 5. Update the gift list link

```js
support: {
  giftListLink: "#gift-list-link-to-update"
}
```

### 6. Update the contribution link

```js
support: {
  contributionLink: "#contribution-link-to-update"
}
```

### 7. Add real couple photos later

There are no separate couple photo files in the project right now. The website intentionally uses designed placeholders so there are no broken image links.

When real photos are available, add them under a public folder such as:

```text
public/images/couple/
```

Suggested filenames:

```text
couple-hero.jpg
couple-1.jpg
couple-2.jpg
proposal.jpg
gallery-1.jpg
gallery-2.jpg
```

### 8. Replace placeholder image areas with real images

In `src/App.jsx`, update:

```js
images: {
  hero: "/images/couple/couple-hero.jpg",
  gallery: [
    "/images/couple/couple-1.jpg",
    "/images/couple/couple-2.jpg",
    "/images/couple/proposal.jpg",
    "/images/couple/gallery-1.jpg"
  ]
}
```

If `hero` is empty or `gallery` is empty, the site displays elegant placeholders instead.

### 9. Update the husband and wife testimonials

In `src/App.jsx`, update:

```js
testimonials: {
  husband: "...",
  wife: "..."
}
```

There is also a code comment above this section showing where to edit the final texts.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Build Before Deployment

```bash
npm run build
```

The production output is generated in:

```text
dist
```

Azure Static Web Apps should deploy the `dist` folder after the build.

## Azure Static Web Apps

Recommended build settings:

- App location: `/`
- API location: leave empty
- Output location: `dist`

The GitHub Actions workflow for Azure Static Web Apps should run:

```bash
npm install
npm run build
```
