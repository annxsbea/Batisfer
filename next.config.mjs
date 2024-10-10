/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  experimental: {
    workerThreads: false, // Desativa o uso de worker threads no build
    cpus: 1, // Limita o uso de CPUs
  },
};

export default nextConfig;
