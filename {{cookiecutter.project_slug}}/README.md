# {{cookiecutter.project_name}}

Proyecto generado con Cookiecutter.

## Stack
- NestJS
- Drizzle ORM
- XState v5
- Biome
- pnpm
- TypeScript
- Arquitectura hexagonal

## Estructura de carpetas

```
{{cookiecutter.project_slug}}/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── maintenance/
│   │   ├── application/
│   │   ├── domain/
│   │   ├── infrastructure/
│   ├── user/
│   │   ├── application/
│   │   ├── domain/
│   │   ├── infrastructure/
├── test/
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.json
├── biome.json
└── ...
```

## Uso

```bash
cookiecutter gh:{{cookiecutter.github_user}}/cookiecutter-nestjs-xstate-drizzle
```

