/** @type {import('next').NextConfig} */
// migration pilot: verify org-owned build + commit-author gate (contact@reitransfer.com)
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
