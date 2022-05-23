import { join, resolve } from 'path';
import telescope from '@osmonauts/telescope';

const protoDir = resolve(join(__dirname, '/../proto'));
const outPath = resolve(join(__dirname, '../src/proto'));

telescope({
  protoDir,
  outPath,
  options: {
    includeAminos: true,
    includeLCDClient: true
  }
});
