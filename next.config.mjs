/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 정적 HTML 파일로 내보내기 설정
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: '/Data-Scientist-portfolio',
  images: {
    unoptimized: true, // next/image 최적화 비활성화 (정적 export 시 필요)
  },
};

export default nextConfig;
