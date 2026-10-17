import { createRequire } from "module"; const { createJiti } = createRequire(process.cwd() + "/package.json")("jiti");
import path from "path"; import fs from "fs";
const root = process.cwd();
const jiti = createJiti(import.meta.url, { alias: { "@": path.join(root, "src") }, jsx: true, moduleCache: true });
// stub server-only + components: blog-data imports only types from components
const { posts } = await jiti.import(path.join(root, "src/lib/blog-data.ts"));
const { services } = await jiti.import(path.join(root, "src/lib/services-data.ts"));
const { blogCategories } = await jiti.import(path.join(root, "src/lib/blog-categories.ts"));
fs.writeFileSync(process.argv[2], JSON.stringify({ posts, services, blogCategories }));
console.log(posts.length, services.length);
