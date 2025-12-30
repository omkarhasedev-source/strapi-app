module.exports = ({ env }) => {
  return {
    connection: {
      client: 'postgres',
      connection: {
        connectionString: env('DATABASE_URL'),
        ssl: {
          rejectUnauthorized: false, // ✅ REQUIRED for Render
        },
      },
      pool: {
        min: 2,
        max: 10,
      },
    },
  };
};
