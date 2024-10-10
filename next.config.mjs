/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.optimization.minimizer.forEach((minimizer) => {
        minimizer.options.parallelism = 1; // Limita a 1 worker
      });
    }
    return config;
  },
};

export default nextConfig;
