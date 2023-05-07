# Backend CRUD with Prisma and Express

This project is a CRUD (create, read, update, delete) backend application using [Prisma](https://www.prisma.io/) and [Express](https://expressjs.com)


copy the `.env.example` file to `.env`

```
APP_PORT=5000
DATABASE_URL="postgresql://spartan@localhost:5432/employee-crud"
```

Install dependencies

```bash
npm install
```

Generate the Prisma Client

```
npx prisma generate
```

Migrate Database with Prisma

```
npx prisma migrate dev
```

Start the server

```bash
npm start
```

Your express server will now be running on port 5000. You can visit [http://localhost:5000](http://localhost:5000) in your web browser to verify that the server is working correctly.

