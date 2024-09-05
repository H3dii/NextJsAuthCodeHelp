/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.discordapp.com",
            },
        ],
    },
    reactStrictMode: false, // Lehetőséget biztosít a StrictMode kikapcsolására
};

export default nextConfig;
