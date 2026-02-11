/**
 * Télécharge toutes les images du site dans public/images/yesfondation/
 * pour hébergement sur yesfondation.org. Exécuter : node scripts/download-images.mjs
 */
import https from "https";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "images", "yesfondation");

const MANIFEST = {
  unsplash: [
    { id: "1448375240586-882707db888b", file: "foret-1.jpg" },
    { id: "1441974231531-c6227db76b6e", file: "nature-1.jpg" },
    { id: "1470071459604-3b5ec3a7fe05", file: "paysage-1.jpg" },
    { id: "1542601906990-b4d3fb778b09", file: "plantation-1.jpg" },
    { id: "1559027615-cd4628902d4a", file: "action-collective.jpg" },
    { id: "1523240795612-9a054b0db644", file: "formation-1.jpg" },
    { id: "1523580494863-6f3031224c94", file: "equipe-1.jpg" },
    { id: "1507003211169-0a1dd7228f2d", file: "communaute-1.jpg" },
    { id: "1511497584788-876760111969", file: "pepiniere-1.jpg" },
    { id: "1472214103451-9374bd1c798e", file: "reboisement-1.jpg" },
    { id: "1529156069898-49953e39b3ac", file: "benevolat-1.jpg" },
    { id: "1532629345422-7515f3d16bb6", file: "don-solidarite.jpg" },
    { id: "1488521787991-ed7bbaae773c", file: "partage-1.jpg" },
    { id: "1516321318423-f06f85e504b3", file: "don-2.jpg" },
    { id: "1560250097-0b93528c311a", file: "temoignage-1.jpg" },
    { id: "1573496359142-b8d87734a5a2", file: "temoignage-2.jpg" },
    { id: "1472099645785-5658abf4ff4e", file: "temoignage-3.jpg" },
    { id: "1580489944761-15a19d654956", file: "temoignage-4.jpg" },
    { id: "1438761681033-6461ffad8d80", file: "temoignage-5.jpg" },
    { id: "1500648767791-00dcc994a43e", file: "temoignage-6.jpg" },
    { id: "1544005313-94ddf0286df2", file: "temoignage-7.jpg" },
    { id: "1521791136064-7986c2920216", file: "contact-hero.jpg" },
    { id: "1560472354-b33ff0c44a43", file: "contact-side.jpg" },
  ],
  placehold: [
    { url: "https://placehold.co/140x48/1a4d3a/ffffff?text=OIPR", file: "logo-oipr.png" },
    { url: "https://placehold.co/140x48/0d7a3a/ffffff?text=SODEFOR", file: "logo-sodefor.png" },
    { url: "https://placehold.co/140x48/166534/ffffff?text=MEF", file: "logo-mef.png" },
    { url: "https://placehold.co/140x48/ff6600/ffffff?text=Orange", file: "logo-orange.png" },
    { url: "https://placehold.co/140x48/ffcc00/000000?text=MTN", file: "logo-mtn.png" },
  ],
};

function download(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
    }).on("error", reject);
  });
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const { id, file } of MANIFEST.unsplash) {
    const url = `https://images.unsplash.com/photo-${id}?w=1200&q=85`;
    try {
      const buf = await download(url);
      fs.writeFileSync(path.join(OUT_DIR, file), buf);
      console.log("OK:", file);
    } catch (e) {
      console.error("Erreur", file, e.message);
    }
  }

  for (const { url, file } of MANIFEST.placehold) {
    try {
      const buf = await download(url);
      fs.writeFileSync(path.join(OUT_DIR, file), buf);
      console.log("OK:", file);
    } catch (e) {
      console.error("Erreur", file, e.message);
    }
  }

  console.log("\nTéléchargement terminé. Images dans public/images/yesfondation/");
}

main();
