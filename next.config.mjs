/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // TODO: Look into image optimization compatibility issue with npm run dev
  images: {
    unoptimized: true
  }
};

export default nextConfig;
