// eslint-disable-next-line @nx/enforce-module-boundaries
import { sync } from 'glob';

import { exec } from 'child_process';

const libRoot = '../';
const tailwindConf = 'tailwind.config.ts';

// Find all `.scss` files and tailwind process them
sync(`${libRoot}/**/*.scss`).forEach((file) => {
  console.log('🚀 ~ sync ~ cssFile:', file);
  exec(
    `npx tailwind -c ${tailwindConf} -i ${file} -o ${file}`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(stderr);
        throw err;
      }
    }
  );
});
