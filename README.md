# SUPAY Dota 2 Tournaments — MVP

Prototipo Next.js para administrar jugadores y generar rosters balanceados por MMR y rol.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

## Publicar en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel, importa el repositorio.
3. Framework preset: Next.js; Build command y output por defecto.
4. Pulsa Deploy.

Los datos de este prototipo se guardan en localStorage del navegador. Para uso real multiusuario, sustituir por una base de datos (por ejemplo Supabase) y añadir autenticación de administrador.
