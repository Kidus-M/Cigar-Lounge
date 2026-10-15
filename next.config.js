// While the lounge is between locations, every URL redirects to "/", which serves
// pages/maintenance.js. Set this to false to bring the full site back.
const MAINTENANCE_MODE = true;

// Paths that must keep working in maintenance mode (Next.js assets, favicons, manifest).
const ALLOWED = "_next/|favicon|apple-touch-icon|android-chrome|site\\.webmanifest";

/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    if (!MAINTENANCE_MODE) return [];
    return [
      {
        source: `/:path((?!${ALLOWED}).+)`,
        destination: "/",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    if (!MAINTENANCE_MODE) return [];
    return {
      beforeFiles: [{ source: "/", destination: "/maintenance" }],
    };
  },
};
