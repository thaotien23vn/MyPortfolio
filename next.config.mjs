/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👉 Bắt buộc để tạo site tĩnh (static)

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
