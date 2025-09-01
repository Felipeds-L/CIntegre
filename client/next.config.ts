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
      // Adicionar hostname da VM para imagens locais
      {
        protocol: 'http',
        hostname: 'vm-cinboraimpactar2.cin.ufpe.br',
        port: '',
        pathname: '/**',
      }
    ],
  },

  // Configuração para servir arquivos estáticos com basePath
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Forwarded-Proto',
            value: 'http',
          },
        ],
      },
    ];
  },
  
  // Configurações adicionais para proxy reverso
  env: {
    NEXT_PUBLIC_API_BASE_URL: '/cintegreback',
  },
};

export default nextConfig;
