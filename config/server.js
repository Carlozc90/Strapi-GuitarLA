module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '303bac3fc27b9e9c7ba7cbe30baa4d3c'),
    },
  },
});
