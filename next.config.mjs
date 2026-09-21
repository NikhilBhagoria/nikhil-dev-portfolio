/** @type {import('next').NextConfig} */
const nextConfig = {
  // Inline this small stylesheet to avoid an extra render-blocking request.
  experimental: { inlineCss: true },
};

export default nextConfig;
