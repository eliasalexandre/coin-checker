import { Tray } from 'electron';
import { resolve } from 'path';

const iconPath = resolve(__dirname, '../', 'assets', 'coin.png');

function createTray() {
  const tray = new Tray(iconPath);
  tray.setToolTip('see currency price of crypto!');

  return tray;
}

export { createTray };
