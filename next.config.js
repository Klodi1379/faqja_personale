/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,
  // GitHub Pages needs static export, Vercel doesn't
  ...(isGitHubPages && {
    output: 'export',
    basePath: '/faqja_personale',
    images: { unoptimized: true },
  }),
};

module.exports = nextConfig;
