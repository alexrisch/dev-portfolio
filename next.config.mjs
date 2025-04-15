/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/alex-portfolio-web' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/alex-portfolio-web/' : '',
};

export default nextConfig; 