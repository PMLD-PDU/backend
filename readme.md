# core backend PMLD PDU

## how to run

```bash
npm install
```

copy `.env.example` to `.env` and set the values for database connection

```bash
npx prisma migrate dev
```

```bash
npm run dev
```

## open api spec

open api spec https://github.com/PMLD-PDU/openapi

## sedikit penjelasan

request dari user pertama masuk ke middleware lalu ke controller lalu ke service lalu ke validator baru ke database, begitu juga sebaliknya
