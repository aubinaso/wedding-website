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

### 7. Add or replace couple photos

Couple photos are stored under:

```text
public/images/couple/
```

Files inside `public` are referenced from the site root, for example:

```text
/images/couple/photo_a_2.jpeg
```

To replace a photo, add the new file in `public/images/couple/`, then update the relevant path in `src/App.jsx`.

### 8. Update image areas

In `src/App.jsx`, update:

```js
images: {
  hero: "/images/couple/les_regards_un_sur_autre.jpeg",
  gallery: [
    { src: "/images/couple/photo_a_2.jpeg", alt: "Portrait de couple d’Axel et Aivi" }
  ]
}
```

If `hero` is empty or `gallery` is empty, the site displays elegant placeholders instead of broken image links.

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
