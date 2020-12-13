/* eslint-disable no-console */
import fs from "fs";

const args = process.argv.slice(2);
const componentName = args[0];

const directory = `${__dirname}/../src/components/${componentName}`;
fs.mkdirSync(directory);
const compBoilerPlate = `import React from 'react';\n\nconst ${componentName} = () => {\nreturn <div />\n};\nexport default ${componentName}`;
const indexBoilerPlate = `import ${componentName} from './${componentName}';\n\nexport default ${componentName};`;

fs.writeFile(`${directory}/${componentName}.tsx`, compBoilerPlate, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Successfully created component tsx file");
  }
});

fs.writeFile(`${directory}/index.ts`, indexBoilerPlate, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Successfully created component index file");
  }
});
