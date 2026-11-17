import type {ImageMetadata} from 'astro';
import manifest from '../data/photos.json';

/** Every photo in src/assets/photos, keyed by file name, with its caption and category. */
const files = import.meta.glob<{default: ImageMetadata}>('../assets/photos/*.jpg', {eager: true});

export type Photo = {file: string; cat: string; alt: string; img: ImageMetadata};

const byFile = new Map<string, Photo>();
for (const m of manifest) {
  const mod = files[`../assets/photos/${m.file}`];
  if (!mod) throw new Error(`Missing photo ${m.file}`);
  byFile.set(m.file, {file: m.file, cat: m.cat, alt: m.alt, img: mod.default});
}

export function photo(file: string): Photo {
  const p = byFile.get(file);
  if (!p) throw new Error(`Unknown photo "${file}" — check src/data/photos.json`);
  return p;
}

export const allPhotos = (): Photo[] => [...byFile.values()];

export const photosIn = (cats: string[]): Photo[] => allPhotos().filter((p) => cats.includes(p.cat));
