if (require('electron-squirrel-startup')) return;
require('./autoupdater');

// Basic init
const electron = require('electron');
const {app, BrowserWindow, ipcMain} = electron
const path = require('path');
const url = require('url');
const macaddress = require('macaddress-secure');
const MenuBuilder  = require('./menu');

// Let electron reloads by itself when webpack watches changes in ./app/
if (process.env.NODE_ENV === 'development') require('electron-reload')(__dirname);

const iconPath = path.join(__dirname, '/app/assets/icons/png/64x64.png');
// To avoid being garbage collected
let mainWindow;

app.on('ready', async () => {

    mainWindow = new BrowserWindow({
        width: 1280,
        height: 900,
        minWidth: 800,
        minHeight: 600,
        backgroundColor: '#282f33',
        icon: iconPath,
        autoHideMenuBar: true,
        title: `${app.getName()} ${app.getVersion()}`,
        titleBarStyle: 'hidden'
    });

    const startUrl = url.format({
            pathname: path.join(__dirname, '/app/index.html'),
            protocol: 'file:',
            slashes: true
        });


    if (process.env.NODE_ENV !== 'development' && process.platform === 'win32')  {
        sendEncryptedDiskInfoToRenderer(mainWindow);
    }


    mainWindow.loadURL(startUrl);
    const menuBuilder = new MenuBuilder(mainWindow);
    menuBuilder.buildMenu();
    mainWindow.on('page-title-updated', e => e.preventDefault())
});

app.on('window-all-closed', function() {
    app.quit();
});


async function sendEncryptedDiskInfoToRenderer(mainWindow)  {
    const encryption = require('./encryption');
    const encryptedDiskInfo = await encryption.runEncryption();
    console.log('encrypted disk', encryptedDiskInfo);
    ipcMain.on('encryption', (event, data) => {
        console.log('data', data);
        event.returnValue = encryptedDiskInfo;
    });
}
