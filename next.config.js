/** @type {import('next').NextConfig} */
const path = require('path');
const withPWA = require('next-pwa')({
<<<<<<< HEAD
  dest: 'public'
  // disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
})

module.exports = withPWA({
  // next.js config
  images: {
    domains: ['50.116.44.91'],
  },
})
=======
    dest: 'public',
    // disable: process.env.NODE_ENV === 'development',
    // register: true,
    // scope: '/app',
    // sw: 'service-worker.js',
    //...
});

module.exports = withPWA({
    // next.js config
    images: {
        domains: ['50.116.44.91', '127.0.0.1'],
    },
});
>>>>>>> ac886fe22ec33c415b52d84bbc231755fa91e88c
