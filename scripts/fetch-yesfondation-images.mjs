/**
 * Récupère les images du site https://yesfondation.org/ et les enregistre dans public/images/yesfondation-org/
 * Exécuter : node scripts/fetch-yesfondation-images.mjs
 */
import https from "https";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = "https://yesfondation.org";
const OUT_DIR = path.join(__dirname, "..", "public", "images", "yesfondation-org");

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const u = new URL(url.startsWith("http") ? url : BASE_URL + url);
    const client = u.protocol === "https:" ? https : http;
    const opts = {
      hostname: u.hostname,
      path: u.pathname + u.search,
      method: "GET",
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
    };
    client.get(opts, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
    }).on("error", reject);
  });
}

function extractImageUrls(html, baseUrl) {
  const urls = new Set();
  const base = baseUrl.replace(/\/$/, "");

  // <img src="...">
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  let m;
  while ((m = imgRegex.exec(html)) !== null) {
    let url = m[1].trim();
    if (url.startsWith("//")) url = "https:" + url;
    else if (url.startsWith("/")) url = base + url;
    else if (!url.startsWith("http")) url = base + "/" + url;
    if (!url.includes("data:") && !url.includes("gravatar") && !url.includes("avatar")) urls.add(url);
  }

  // background-image: url(...)
  const bgRegex = /background(?:-image)?:\s*url\(["']?([^"')]+)["']?\)/gi;
  while ((m = bgRegex.exec(html)) !== null) {
    let url = m[1].trim();
    if (url.startsWith("//")) url = "https:" + url;
    else if (url.startsWith("/")) url = base + url;
    else if (!url.startsWith("http")) url = base + "/" + url;
    if (!url.includes("data:")) urls.add(url);
  }

  // srcset
  const srcsetRegex = /srcset=["']([^"']+)["']/gi;
  while ((m = srcsetRegex.exec(html)) !== null) {
    m[1].split(",").forEach((part) => {
      const url = part.trim().split(/\s+/)[0];
      if (!url) return;
      let u = url;
      if (u.startsWith("//")) u = "https:" + u;
      else if (u.startsWith("/")) u = base + u;
      else if (!u.startsWith("http")) u = base + "/" + u;
      if (!u.includes("data:")) urls.add(u);
    });
  }

  return Array.from(urls);
}

function safeFilename(url) {
  const u = new URL(url);
  const name = path.basename(u.pathname) || "image";
  const ext = path.extname(name) || (url.includes(".png") ? ".png" : ".jpg");
  const base = path.basename(name, path.extname(name)).replace(/[^a-z0-9-_]/gi, "_");
  return (base || "image") + ext;
}

async function main() {
  console.log("Récupération de la page d'accueil...");
  let html;
  try {
    const buf = await fetchUrl(BASE_URL + "/");
    html = buf.toString();
  } catch (e) {
    console.error("Erreur fetch page:", e.message);
    process.exit(1);
  }

  const urls = extractImageUrls(html, BASE_URL);
  console.log("Images trouvées:", urls.length);

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const seen = new Set();
  let n = 0;
  for (const url of urls) {
    const name = safeFilename(url);
    const key = name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    const file = path.join(OUT_DIR, name);
    try {
      const buf = await fetchUrl(url);
      if (buf.length > 100) {
        fs.writeFileSync(file, buf);
        console.log("OK:", name);
        n++;
      }
    } catch (e) {
      console.error("Erreur", name, e.message);
    }
  }

  // Pages supplémentaires pour plus d'images
  const pages = ["/qui-sommes-nous/", "/etre-benevole/", "/contacts/", "/blog-grid/"];
  for (const page of pages) {
    try {
      const buf = await fetchUrl(BASE_URL + page);
      const pageHtml = buf.toString();
      const pageUrls = extractImageUrls(pageHtml, BASE_URL);
      for (const url of pageUrls) {
        const name = safeFilename(url);
        const key = name.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        const file = path.join(OUT_DIR, name);
        try {
          const imgBuf = await fetchUrl(url);
          if (imgBuf.length > 100) {
            fs.writeFileSync(file, imgBuf);
            console.log("OK:", name, "(depuis", page + ")");
            n++;
          }
        } catch (e) {
          console.error("Erreur", name, e.message);
        }
      }
    } catch (e) {
      console.error("Page", page, e.message);
    }
  }

  console.log("\nTerminé. " + n + " images dans public/images/yesfondation-org/");
}

main();
