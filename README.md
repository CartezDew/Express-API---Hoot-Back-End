# Express API practice project

An Express and MongoDB practice project with routes for users and JWT verification. The repository also contains a small Vite/React client scaffold.

**Status:** This is an unfinished learning project. The `/auth/sign-up` route currently returns a mock token and does not create an account. Do not deploy it as an authentication service.

## Run locally

Requires Node.js, npm, and a MongoDB database. Create a `.env` file in the repository root:

```dotenv
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-local-development-secret
```

Then run:

```bash
npm install
npm run dev:server
```

The server listens on port 3000 by default. Use `npm run dev:client` in another terminal to start the Vite client. `npm run build` builds the client.
