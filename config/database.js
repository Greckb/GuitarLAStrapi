module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdnu05mn6mpuqrsd9u9g-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_x0jk'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'ZZHvHVELJ1ihSzPOQUe1kZ13mf5KVyfW'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
