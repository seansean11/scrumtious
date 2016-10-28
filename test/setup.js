global.document = require('jsdom').jsdom('<body></body>');

process.env.NODE_ENV = 'test';
global.window = document.defaultView;
global.navigator = window.navigator;

function noop() {
  return null;
}

require.extensions['.css'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.md'] = noop;
require.extensions['.png'] = noop;
require.extensions['.svg'] = noop;
require.extensions['.jpg'] = noop;
require.extensions['.jpeg'] = noop;
require.extensions['.gif'] = noop;
