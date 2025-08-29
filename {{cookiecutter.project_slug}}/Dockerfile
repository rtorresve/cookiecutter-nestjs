# Dockerfile para {{cookiecutter.project_name}}
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN corepack enable && corepack prepare pnpm@8.15.5 --activate && pnpm install --frozen-lockfile
RUN pnpm run build
CMD ["pnpm", "start:prod"]
