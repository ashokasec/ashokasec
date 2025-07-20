import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
        return [
            {
                source: 'resume',
                destination: 'https://drive.google.com/file/d/1aq-f3ucT34IzP04o1fs_xwTwNCzvlDzc/view',
                permanent: false,
            }
           ] 
    },
};

export default nextConfig;
