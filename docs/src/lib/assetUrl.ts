/**
 * Prepends the Vite base URL to an absolute asset path.
 * In dev this is "/", on GitHub Pages it is "/digdir.no/".
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Strip leading slash from path to avoid double slashes
  return base + path.replace(/^\//, "");
}
