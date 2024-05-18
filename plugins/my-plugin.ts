import { basename } from 'path';

export default function myPlugin() {
  return {
    name: 'my-plugin',

    transform(src: string, id: string) {
      if (id.endsWith('.png')) {
        const fileName = basename(id);
        console.log(
          `\n\x1B[38;5;205m✨ Found a PNG image file: ${fileName} ✨\x1B[0m`
        );
      }
    },
  };
}
