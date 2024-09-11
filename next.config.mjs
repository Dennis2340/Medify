/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects(){
        return [
         {
             source: "/sign-in",
             destination: "/api/auth/login",
             permanent: true
         },
         {
             source: "/sign-up",
             destination: "/api/auth/register",
             permanent: true
         },
         {
             source: "/sign-out",
             destination: "/api/auth/logout",
             permanent: true
         }
        ]
    },
};

export default nextConfig;
