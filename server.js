"use strict";

const path = require("path");
const express = require("express");
const compression = require("compression");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "img-src": ["'self'", "data:"],
        "script-src": ["'self'", "https://fonts.googleapis.com"],
        "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        "font-src": ["'self'", "https://fonts.gstatic.com"]
      }
    },
    crossOriginEmbedderPolicy: false
  })
);

app.use(compression());
app.use(express.static(path.join(__dirname)));

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Physics Formula Explorer running on port ${PORT}`);
});

