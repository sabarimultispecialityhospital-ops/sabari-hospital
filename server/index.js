import 'dotenv/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import express from 'express';
import cors from 'cors';
import { appointmentsRouter } from './routes/appointments.js';
import { contactRouter } from './routes/contact.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 8787;

// In production, lock this down to the site's real origin via CORS_ORIGIN.
const corsOrigin = process.env.CORS_ORIGIN || true;
app.use(cors({ origin: corsOrigin }));
app.use(express.json({ limit: '20kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.use('/api', appointmentsRouter);
app.use('/api', contactRouter);

// In production this same server can also serve the built frontend (`vite build`
// output in /dist), so the site and the API share one origin — no CORS or extra
// reverse-proxy config needed. In development the frontend runs separately
// under Vite (see vite.config.js's dev proxy) and this block is a no-op.
const distDir = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error('[server] Unhandled error:', err);
  res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
});

app.listen(PORT, () => {
  console.log(`Sabari Hospitals appointment API listening on http://localhost:${PORT}`);
});
