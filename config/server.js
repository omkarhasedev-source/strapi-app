module.exports = ({ env }) => ({
  host: "0.0.0.0",
  port: env.int("PORT", 1337), // <- Use Render's port
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
    apiToken: {
      salt: env("API_TOKEN_SALT"),
    },
  },
});
