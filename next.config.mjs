/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true, // Permite exportar imágenes sin optimización
    },
};

export default nextConfig;
