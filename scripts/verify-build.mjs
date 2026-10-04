import assert from "node:assert/strict";
import { readFile, access, readdir } from "node:fs/promises";
import path from "node:path";

const root = new URL("../dist/", import.meta.url);
const html = await readFile(new URL("index.html", root), "utf8");
assert.match(
  html,
  /<link[^>]+rel="canonical"[^>]+href="https:\/\/cerbur\.github\.io\/"/,
);
assert.match(html, /href="https:\/\/cerbur\.github\.io\/blog\/"/);
assert.doesNotMatch(
  html,
  /\/cerbur\.github\.io\/(?:_astro|favicon)|Ryan Fitzgerald|rfitzio|Lorem ipsum|ExtensionKit|aidevroundup|your-email@example|Senior Software Engineer/i,
);
assert.doesNotMatch(
  html,
  /<script\b|mailto:(?:null|undefined)|href="(?:#|undefined|null)"/,
);
for (const section of [
  "hero",
  "about",
  "experience",
  "projects",
  "stack",
  "writing",
  "contact",
]) {
  assert.ok(html.includes(`id="${section}"`), `Missing section: ${section}`);
}
for (const [, anchor] of html.matchAll(/href="#([^" ]+)"/g)) {
  assert.ok(html.includes(`id="${anchor}"`), `Broken local anchor: ${anchor}`);
}
for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)) {
  if (url === "/") continue;
  const local = new URL(`.${url}`, root);
  assert.ok(local.href.startsWith(root.href), `Asset escaped dist: ${url}`);
  await access(local);
}
async function inspect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = new URL(
      entry.name + (entry.isDirectory() ? "/" : ""),
      directory,
    );
    if (entry.isDirectory()) await inspect(file);
    else if ([".html", ".css", ".js"].includes(path.extname(entry.name))) {
      assert.doesNotMatch(
        await readFile(file, "utf8"),
        /\/(?:Users|private\/tmp|tmp)\//,
        `Local absolute path in ${entry.name}`,
      );
    }
  }
}
await inspect(root);
console.log(
  "Production output verified: root canonical, assets, section anchors, blog navigation, no template content or client JavaScript.",
);
