import { withCustomConfig } from "react-docgen-typescript";
import * as path from "path";
import fs from "fs";

// this will actually be passed in
const componentFile = path.join(__dirname, "../src/index.tsx");

const readmePath = path.join(process.cwd(), "README.md");
const tsconfigPath = path.join(process.cwd(), "tsconfig.json");
const parser = withCustomConfig(tsconfigPath, {
  propFilter: (prop) =>
    !/@types[\\/]react[\\/]/.test(prop.parent?.fileName || ""),
});
const components = parser.parse(componentFile);

const md =
  "| Prop Name | Type | Default | Description |\n" +
  "| --- | --- | --- | --- |\n" +
  Object.values(components[0].props)
    .map(({ name, defaultValue, description, required, type }) => {
      return `| \`${name}\` | ${type.name.replace("| undefined", "")} | \`${
        defaultValue?.value ?? "none"
      }\` | ${required ? "**Required**" : ""} ${description} |`;
    })
    .join("\n");

const oldReadme = fs.readFileSync(readmePath, "utf8");
const commentStart = new RegExp(`<!-- props-start -->`).exec(oldReadme);
const commentEnd = new RegExp(`<!-- props-end -->`).exec(oldReadme);
if (commentStart && commentEnd && commentEnd.index > commentStart.index) {
  const newReadme = `${oldReadme.substring(
    0,
    commentStart.index + commentStart[0].length
  )}
${md}
${oldReadme.substring(commentEnd.index)}`;
  if (newReadme !== oldReadme) {
    fs.writeFileSync(readmePath, newReadme, "utf8");
  }
}
