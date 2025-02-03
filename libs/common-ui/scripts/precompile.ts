import { readFile, writeFile } from 'fs';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { sync } from 'glob';

import { exec } from 'child_process';

const libRoot = '../';
const tailwindConf = 'tailwind.config.ts';
const processedExt = '.precompiled.scss';
const styleRegex = /styleUrls:\s*\[([^\]]+)]/;

// Find all `.scss` files and tailwind process them
sync(`${libRoot}/**/*.scss`).forEach((file) => {
  const cssFile = file.replace(/\.scss$/, processedExt);
  console.log('🚀 ~ sync ~ cssFile:', cssFile);
  exec(
    `npx tailwind -c ${tailwindConf} -i ${file} -o ${cssFile}`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(stderr);
        throw err;
      }
    }
  );
});

// Find all components with `styleUrls` and switch `.scss` extension to our precompiled file names
sync(`${libRoot}/**/*.component.ts`).forEach((file) => {
  readFile(file, (err, data) => {
    if (err) throw err;
    const content = data.toString();
    const match = content.match(styleRegex);
    if (match) {
      const styleUrls = match[1]
        .split(',')
        .map((s) => s.trim().replace('.scss', processedExt))
        .join(', ');

      writeFile(
        file,
        content.replace(styleRegex, `styleUrls: [${styleUrls}]`),
        (err) => {
          if (err) throw err;
        }
      );
    }
  });
});
