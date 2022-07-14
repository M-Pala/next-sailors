/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // redirects : async() => {
  //   return [
  //     {
  //       source: '/Thanks',
  //       destination: '/',
  //       permanent: false,
  //     },
  //   ]
  // }
}

module.exports = nextConfig
