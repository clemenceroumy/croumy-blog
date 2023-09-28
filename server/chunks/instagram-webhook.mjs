import { a as defineEventHandler } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';

const instagramWebhook = defineEventHandler(() => {
  return "Hello World! ";
});

export { instagramWebhook as default };
//# sourceMappingURL=instagram-webhook.mjs.map
