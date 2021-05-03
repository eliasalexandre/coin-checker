const { Tray } = require('electron');
const { resolve } = require('path');

const iconPath = resolve(__dirname, '../', 'assets', 'coin.png');

function createTray() {
  const tray = new Tray(iconPath);
  tray.setToolTip('see currency price of crypto!');

  return tray;
}

module.exports = createTray();
