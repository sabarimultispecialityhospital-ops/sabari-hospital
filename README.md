# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Appointment API (WhatsApp delivery)

The global "Book Appointment" modal submits to a small Express backend at `server/`, which validates and sanitises the request, formats it into the hospital's WhatsApp message, and delivers it via the WhatsApp Business Cloud API. No WhatsApp credentials are ever present in the frontend.

Setup:

1. `cp .env.example .env` and fill in `WHATSAPP_ACCESS_TOKEN` and `WHATSAPP_PHONE_NUMBER_ID` from your Meta WhatsApp Business app. `WHATSAPP_PHONE_NUMBER` is already set to the hospital's number.
2. Run both the frontend and API together: `npm run dev:full` (or separately: `npm run dev` and `npm run server`). Vite proxies `/api/*` to the API server in dev (see `vite.config.js`).
3. For production, run `npm run build` then `npm run server` — the same Express server also serves the built `dist/` output, so the site and API share one origin.

Endpoint: `POST /api/appointments` — validates input server-side, rate-limits repeated submissions, and returns `{ success, message }` (plus `errors` on validation failure). See `server/routes/appointments.js`, `server/lib/validate.js`, and `server/lib/whatsapp.js`.
