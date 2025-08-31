import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  output: 'standalone',
  
  // Configuração para proxy reverso nginx
  basePath: '/cintegre',
  assetPrefix: '/cintegre',
  trailingSlash: true,

  async rewrites() {
    return [
      // Rewrite para API interna (backend do projeto)
      {
        source: '/api/:path*',
        destination: '/cintegreback/:path*',
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  
  // Configurações adicionais para proxy reverso
  env: {
    NEXT_PUBLIC_API_BASE_URL: '/cintegreback',
  },
};

export default nextConfig;
