if (require('electron-squirrel-startup')) return;

// Basic init
const electron = require('electron');
const {app, BrowserWindow, ipcMain, dialog} = electron;
const path = require('path');
const url = require('url');
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

    await sendEncryptedDiskInfoToRenderer();

    mainWindow.loadURL(startUrl);
    const menuBuilder = new MenuBuilder(mainWindow);
    menuBuilder.buildMenu();
    mainWindow.on('page-title-updated', e => e.preventDefault())


    mainWindow.webContents.once("did-frame-finish-load", function (event) {
        require('./autoupdater');
    })

});

app.on('window-all-closed', function() {
    app.quit();
});

async function sendEncryptedDiskInfoToRenderer()  {
    let encryptedDiskInfo;

    try {
        if (process.platform === 'win32') {
            const { runEncryption } = require('./encryption');
            encryptedDiskInfo = await runEncryption();
        }
    } catch (error) {
        console.log(error);
    }

    ipcMain.on('encryption', (event, data) => {
        event.returnValue = encryptedDiskInfo || '';
    });
}
