/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: 'wdc-icon-generator.s3.amazonaws.com'
    }]
  }
};

export default nextConfig;
