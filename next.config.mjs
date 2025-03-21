/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  images: {
    minimumCacheTTL: 2592000, // 30 days
    remotePatterns: prepareRemotePatterns(),
  },
  transpilePackages: ["react-syntax-highlighter"],
  skipTrailingSlashRedirect: true,
  assetPrefix:
    process.env.NODE_ENV === "production" &&
    process.env.VERCEL_ENV === "production"
      ? process.env.NEXT_PUBLIC_BASE_URL
      : undefined,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/documents",
        permanent: false,
        has: [
          {
            type: "host",
            value: process.env.NEXT_PUBLIC_APP_BASE_HOST,
          },
        ],
      },
      {
        source: "/settings",
        destination: "/settings/general",
        permanent: false,
      },
      {
        source: "/sina-afra",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true, // Kalıcı yönlendirme (308 HTTP status code)
      },
      {
        source: "/mert-firat",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/simyavc",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/turgutkonukoglu",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/e2vc",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/212vc",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/hasanaslanoba",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/melihodemis",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/nevzataydin",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/fatihisbecer",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/evrenucok",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/demetmutlu",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/fethisabancikamisli",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/bulenttekmen",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/koraygultekinbahar",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/muratozyegin",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/mahmut-unlu",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/firatisbecer",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/ihsanelgin",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/scalexventures",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/alikarabey",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/ahmetkayhan",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/erdemyurdanur",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
      {
        source: "/barbarosozbugutu",
        destination: "https://investor.agrowy.com/view/cm8i5qwgv0001ks0334a0qzk6",
        permanent: true,
      },
    ];
  },
  async headers() {
    const isDev = process.env.NODE_ENV === "development";

    return [
      {
        // Default headers for all routes
        source: "/:path*",
        headers: [
          {
            key: "Referrer-Policy",
            value: "no-referrer-when-downgrade",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Report-To",
            value: JSON.stringify({
              group: "csp-endpoint",
              max_age: 10886400,
              endpoints: [{ url: "/api/csp-report" }],
            }),
          },
          {
            key: "Content-Security-Policy-Report-Only",
            value:
              `default-src 'self' https: ${isDev ? "http:" : ""}; ` +
              `script-src 'self' 'unsafe-inline' 'unsafe-eval' https: ${isDev ? "http:" : ""}; ` +
              `style-src 'self' 'unsafe-inline' https: ${isDev ? "http:" : ""}; ` +
              `img-src 'self' data: blob: https: ${isDev ? "http:" : ""}; ` +
              `font-src 'self' data: https: ${isDev ? "http:" : ""}; ` +
              `frame-ancestors 'none'; ` +
              `connect-src 'self' https: ${isDev ? "http: ws: wss:" : ""}; ` + // Add WebSocket for hot reload
              `${isDev ? "" : "upgrade-insecure-requests;"} ` +
              "report-to csp-endpoint;",
          },
        ],
      },
      {
        source: "/view/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
      {
        // Embed routes - allow iframe embedding
        source: "/view/:path*/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              `default-src 'self' https: ${isDev ? "http:" : ""}; ` +
              `script-src 'self' 'unsafe-inline' 'unsafe-eval' https: ${isDev ? "http:" : ""}; ` +
              `style-src 'self' 'unsafe-inline' https: ${isDev ? "http:" : ""}; ` +
              `img-src 'self' data: blob: https: ${isDev ? "http:" : ""}; ` +
              `font-src 'self' data: https: ${isDev ? "http:" : ""}; ` +
              "frame-ancestors *; " + // This allows iframe embedding
              `connect-src 'self' https: ${isDev ? "http: ws: wss:" : ""}; ` + // Add WebSocket for hot reload
              `${isDev ? "" : "upgrade-insecure-requests;"}`,
          },
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
      {
        source: "/services/:path*",
        ...(process.env.NEXT_PUBLIC_WEBHOOK_BASE_HOST && {
          has: [{ type: "host", value: process.env.NEXT_PUBLIC_WEBHOOK_BASE_HOST }],
        }),
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/api/webhooks/services/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
      {
        source: "/unsubscribe",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
    ];
  },
  experimental: {
    outputFileTracingIncludes: {
      "/api/mupdf/*": ["./node_modules/mupdf/dist/*.wasm"],
    },
    missingSuspenseWithCSRBailout: false,
  },
};

function prepareRemotePatterns() {
  let patterns = [
    // static images and videos
    { protocol: "https", hostname: "assets.agrowy.com" },
    { protocol: "https", hostname: "cdn.papermarkassets.com" },
    { protocol: "https", hostname: "d2kgph70pw5d9n.cloudfront.net" },
    // twitter img
    { protocol: "https", hostname: "pbs.twimg.com" },
    // linkedin img
    { protocol: "https", hostname: "media.licdn.com" },
    // google img
    { protocol: "https", hostname: "lh3.googleusercontent.com" },
    // papermark img
    { protocol: "https", hostname: "www.agrowy.com" },
    { protocol: "https", hostname: "app.agrowy.com" },
    { protocol: "https", hostname: "www.agrowy.com" },
    { protocol: "https", hostname: "app.agrowy.com" },
    // useragent img
    { protocol: "https", hostname: "faisalman.github.io" },
    // special document pages
    { protocol: "https", hostname: "d36r2enbzam0iu.cloudfront.net" },
  ];

  if (process.env.NEXT_PRIVATE_UPLOAD_DISTRIBUTION_HOST) {
    patterns.push({
      protocol: "https",
      hostname: process.env.NEXT_PRIVATE_UPLOAD_DISTRIBUTION_HOST,
    });
  }

  if (process.env.NEXT_PRIVATE_ADVANCED_UPLOAD_DISTRIBUTION_HOST) {
    patterns.push({
      protocol: "https",
      hostname: process.env.NEXT_PRIVATE_ADVANCED_UPLOAD_DISTRIBUTION_HOST,
    });
  }

  if (process.env.VERCEL_ENV === "production") {
    patterns.push({
      // production vercel blob
      protocol: "https",
      hostname: "yoywvlh29jppecbh.public.blob.vercel-storage.com",
    });
  }

  if (
    process.env.VERCEL_ENV === "preview" ||
    process.env.NODE_ENV === "development"
  ) {
    patterns.push({
      // staging vercel blob
      protocol: "https",
      hostname: "36so9a8uzykxknsu.public.blob.vercel-storage.com",
    });
  }

  return patterns;
}

export default nextConfig;