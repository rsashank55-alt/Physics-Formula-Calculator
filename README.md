# Physics Formula Explorer

Interactive web app that visualizes popular physics equations with animated illustrations and plain-language explanations.

## Running locally

```bash
npm install
npm run start
```

Then open `http://localhost:3000`.

## Deploying on Render

1. Create a new **Web Service** on Render.
2. Connect to the GitHub repository.
3. Use these build and start commands:

   - Build command: `npm install`
   - Start command: `npm start`

4. Set the environment to `Node 18` or higher (Render’s default works).

The Express server in `server.js` serves the static assets and adds sensible security headers for production.

