
// // next.config.js
const withLess = require("next-with-less");
const withPWA = require('next-pwa');

// optional next.js configuration
const nextConfig = {
    useFileSystemPublicRoutes: false,
    distDir: 'build',
};

const pwa = withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
})

module.exports = {
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(mp3)$/,
            type: "asset/resource",
            generator: {
                filename: "static/chunks/[path][name].[hash][ext]",
            },
        });

        return config;
    },
    ...pwa
};

// const withPWA = require('next-pwa');

// const config = {
//     test: /\.(mp3)$/,
//     type: "asset/resource",
//     generator: {
//         filename: "static/chunks/[path][name].[hash][ext]",
//     }
// }

// module.exports = withPWA({
//   dest: 'public',
//   register: true,
//   skipWaiting: true,
//   disable: process.env.NODE_ENV === 'development',
// })(config);