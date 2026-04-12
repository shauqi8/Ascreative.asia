# AS Creative Solution & Resources Website Plan

This plan details the architecture and implementation for the new multi-page Astro website, mapped directly from the contents of the `ASCREATIVE_CATALOGUE_2026.pdf` and `ASCREATIVE_CP2026.pdf`.

## User Review Required
Please review the proposed page structure, content mapping, and content collection approach below. Let me know if you would like me to add, remove, or modify any items.

## 1. Content Analysis & Mapping

**Brand / Key Information:**
- **Company Name:** AS Creative Solution & Resources
- **Slogan:** "Where Creativity, Technology, Events, and Sustainability Come Together"
- **Contact:** Adam Shah, Saiful Rizan (+60173746240, +60122197979, Adam.ascsr@gmail.com, saiful.ascsr@gmail.com)
- **Address:** Lot 14, Jalan Perusahaan Dua, Batu Caves Industrial Area, 68100 Batu Caves, Selangor, Malaysia.
- **Website Domain:** www.ascreative.asia

**Primary Content Pillars:**
1. **Creative & Technology:** Digital Marketing, Web Development, Resource Management.
2. **Event Production:** Event structures & spaces (canopy, stage), Decoration (hoarding, display), Audio/Visual/Lighting, and full Event Management.
3. **Environment:** Waste Management & Public Cleansing.

**Case Studies / Portfolio:**
UMW Industries (Forklift competition), Rumpun Selangor (Tour for Raja Muda Selangor), Cradle Fund with Voxed collaboration.

## 2. Page & Component Structure (Astro Architecture)

### Pages (`/src/pages/`)
We will use file-based routing to create the following pages:
- `/`: **Home** - Hero section, brief "About Us" introduction, service pillars overview, and a call-to-action to contact.
- `/about`: **About Us** - The complete 20-year history and mission/vision/values extracted from the company profile.
- `/services`: **Services Overview** - A directory of the three main pillars (Creative & Tech, Event Production, Environment).
- `/services/[...slug]`: **Service Details** - Dynamically generated pages for the detailed services listing using Astro Collections.
- `/portfolio`: **Projects/Case Studies** - Showcasing UMW Industries, Rumpun Selangor, and the Cradle Fund event.
- `/contact`: **Contact Us** - Direct contact forms, location maps, and executive contact details.

### Components (`/src/components/`)
- `Navigation.astro`: Shared responsive navbar.
- `Footer.astro`: Shared footer containing addresses and quick links.
- `Hero.astro`: Reusable hero section for the Home page.
- `ServiceCard.astro`: Card component to display services.
- `ProjectCard.astro`: Card component to display portfolio items.

### Layout (`/src/layouts/`)
- `Layout.astro`: Base wrapper handling the `<head>`, Tailwind base, global fonts, the `Navigation` top, content slot, and `Footer` bottom.

## 3. Data Collections (`/src/content/`)

To adhere to the requirement of using collections for lists of items, we will construct:
- **`services` Collection (JSON or Markdown)**: Cataloging each specific offering exactly as found in the PDF (e.g., Canopy & Tent, Stage, Exhibition Booth, etc.).
- **`portfolio` Collection (Markdown)**: Documenting the key client case studies from the CP.

## 4. Technical Execution & Tools

- **Astro & Routing:** Utilizing Astro minimal template (already initialized).
- **Styling:** Setup Tailwind CSS using `npx astro add tailwind` and establish a premium, professional color scheme mapping to AS Creative's business profile.
- **Responsiveness:** Tailwind utility classes (`md:`, `lg:`) to ensure perfect layout mapping across mobile and desktop.

Once this plan is approved, I will immediately run the necessary installation commands for Tailwind CSS and begin generating the components and pages.
