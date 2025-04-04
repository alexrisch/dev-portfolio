# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases projects with a clean, professional design and is optimized for deployment on GitHub Pages.

## Features

- 🚀 Built with Next.js App Router
- 💻 Responsive design that works on all devices
- 🌓 Dark mode support
- 📱 Optimized images with Next.js Image component
- 🔗 Dynamic project pages
- 🎨 Clean, modern UI with Tailwind CSS
- 📊 Project showcase with tech stack display
- 🔄 Automatic deployment to GitHub Pages

## Project Structure

```
alex-portfolio-web/
├── public/              # Static assets
│   └── images/          # Project images
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   └── projects/    # Project pages
│   ├── data/            # Project data
│   │   └── projects.ts  # Project information
│   └── types/           # TypeScript types
│       └── project.ts   # Project interface
├── .github/             # GitHub configuration
│   └── workflows/       # GitHub Actions
├── next.config.mjs      # Next.js configuration
└── README.md            # This file
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/alex-portfolio-web.git
   cd alex-portfolio-web
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customizing Your Portfolio

### Adding Projects

Edit the `src/data/projects.ts` file to add your own projects:

```typescript
export const projects: Project[] = [
  {
    title: "Your Project Title",
    description: "A detailed description of your project",
    techStack: ["React", "Node.js", "MongoDB"],
    headerMedia: "/images/your-project-header.jpg",
    media: ["/images/your-project-1.jpg", "/images/your-project-2.jpg"],
    footer: "Additional information about your project",
    repoLink: "https://github.com/yourusername/your-project"
  },
  // Add more projects as needed
];
```

### Adding Images

1. Place your project images in the `public/images/` directory
2. Reference them in your project data using paths like `/images/your-image.jpg`

### Updating Personal Information

Edit the `src/app/page.tsx` file to update your name and description in the hero section.

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. The static files will be generated in the `out` directory.

### GitHub Pages Setup

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. The site will be automatically deployed when you push to the main branch

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
