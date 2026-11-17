/**
 * Turns a normal build (made for https://190onmaple.co.za/) into a client
 * preview that works from a GitHub Pages sub-folder such as
 * https://<user>.github.io/<repo>/.
 *
 * - Prefixes every root-relative link and asset path with the sub-folder.
 * - Adds `noindex` so the preview never competes with the real site in Google
 *   (canonical tags already point at 190onmaple.co.za).
 *
 * Usage: node scripts/pages-preview.mjs /repo-name
 */
import {readdir, readFile, writeFile} from 'node:fs/promises';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';

const base = '/' + (process.argv[2] || '').replace(/^\/+|\/+$/g, '');
if (base === '/') throw new Error('Pass the sub-folder, e.g. /190-on-Maple-venue-website-demo');
const dist = fileURLToPath(new URL('../dist/', import.meta.url));

async function* walk(dir) {
  for (const e of await readdir(dir, {withFileTypes: true})) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

// Attribute values that start with a single "/" (not "//" protocol-relative).
const attr = /(\s(?:href|src|srcset|content|action|data-full|poster)=["'])\/(?!\/)/g;
// Extra entries inside srcset lists: ", /_astro/…"
const srcsetItem = /(,\s*)\/(?=_astro\/)/g;

let n = 0;
for await (const file of walk(dist)) {
  if (file.endsWith('.html')) {
    let html = await readFile(file, 'utf8');
    html = html.replace(attr, `$1${base}/`).replace(srcsetItem, `$1${base}/`);
    if (!html.includes('name="robots"')) html = html.replace('<head>', '<head><meta name="robots" content="noindex">');
    await writeFile(file, html);
    n++;
  } else if (file.endsWith('.webmanifest')) {
    const json = (await readFile(file, 'utf8')).replace(/"src": "\//g, `"src": "${base}/`);
    await writeFile(file, json);
  }
}
console.log(`Prepared ${n} pages for ${base}/`);
