const path = require('path');

require('electron').app.whenReady().then(async () => {
  await import('./main.js');
});