# Ghana IP Pulse - Astro + Sanity

A faithful recreation of the Ghana IP Pulse website using Astro 6 and Sanity CMS.

## Setup

1. Copy the example environment file and fill in your values:
   ```bash
   cp .env.example .env
   ```

2. Initialize your Sanity project:
   ```bash
   npx sanity@latest init --env .env
   ```
   This will link your Sanity project and write the project ID and dataset to your `.env` file.

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Visit http://localhost:4321/studio to access Sanity Studio. Approve CORS when prompted.

## Visual Editing

To enable Visual Editing:

1. Set `PUBLIC_SANITY_VISUAL_EDITING_ENABLED=true` in your `.env` file.
2. Generate a Viewer token from your Sanity project dashboard:
   - Go to https://sanity.io/manage
   - Select your project
   - Navigate to API > Tokens
   - Add a new token with "Viewer" permissions
3. Add the token to your `.env` file as `SANITY_API_READ_TOKEN`.

## Project Structure

```
astro_version/
├── public/
├── src/
│   ├── components/
│   │   ├── PortableText.astro
│   │   ├── PortableTextImage.astro
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   └── ImageWithFallback.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── resources.astro
│   │   ├── events.astro
│   │   └── contact.astro
│   ├── sanity/
│   │   ├── schemaTypes/
│   │   │   ├── blockContent.ts
│   │   │   ├── author.ts
│   │   │   ├── category.ts
│   │   │   ├── post.ts
│   │   │   ├── event.ts
│   │   │   ├── resource.ts
│   │   │   └── index.ts
│   │   └── lib/
│   │       ├── load-query.ts
│   │       ├── url-for-image.ts
│   │       └── resolve.ts
│   ├── styles/
│   │   └── global.css
│   └── env.d.ts
├── sanity.config.ts
├── astro.config.mjs
├── .env.example
├── tsconfig.json
└── package.json
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Tech Stack

- Astro 6 (server output mode)
- @sanity/astro (official integration)
- @astrojs/react (for Studio embedding and interactive islands)
- astro-portabletext (for rendering Portable Text)
- @sanity/image-url (for Sanity CDN image URLs)
- TypeScript
- CSS (no Tailwind - preserves original styles)
