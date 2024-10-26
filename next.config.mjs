/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xaydungnhattin.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.xddaogia.vn',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'down-vn.img.susercontent.com',
        port: '',
        pathname: '/file/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fsgn5-5.fna.fbcdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fsgn5-9.fna.fbcdn.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
