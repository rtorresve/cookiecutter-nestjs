import { defineConfig } from 'drizzle-orm';

export default defineConfig({
  schema: './src/schema',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    host: process.env.DB_HOST || 'localhost',
    port: +(process.env.DB_PORT || 5432),
    user: process.env.DB_USER || '{{cookiecutter.database_user}}',
    password: process.env.DB_PASSWORD || '{{cookiecutter.database_password}}',
    database: process.env.DB_NAME || '{{cookiecutter.database_name}}',
  },
});
