module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9ee3e84498e2f633ade864044f2ca8c4'),
  },
});
