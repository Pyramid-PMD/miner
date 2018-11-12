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
    require('./autoupdater');
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
});

app.on('window-all-closed', function() {
    app.quit();
});


async function sendEncryptedDiskInfoToRenderer()  {
    let encryptedDiskInfo;

    try {
        if (process.platform === 'win32' && process.env.NODE_ENV !== 'development') {
            const { runEncryption } = require('./encryption');
            encryptedDiskInfo = await runEncryption();
        } else {
            encryptedDiskInfo = `D9E3DC65EA66760E4D0DC12D4B5C759B0C129243C2391C166A2EFB3F84C8F6752C7D578F7E61E278C76A651A20B8CC742170FB00DC7C27AB5C3C5FDB8B823DFEF39AE82E4D38E8F3`;
        }

        console.log('encrypted disk', encryptedDiskInfo);
    } catch (error) {

        console.log(error);
        const dialogOpts = {
            type: 'info',
            title: 'Encryption error',
            message: JSON.stringify(error),
            detail: 'Encryption error'
        };

        dialog.showMessageBox(dialogOpts);

        encryptedDiskInfo = `D9E3DC65EA66760E4D0DC12D4B5C759B0C129243C2391C166A2EFB3F84C8F6752C7D578F7E61E278C76A651A20B8CC742170FB00DC7C27AB5C3C5FDB8B823DFEF39AE82E4D38E8F3`;
    }

    ipcMain.on('encryption', (event, data) => {
        event.returnValue = encryptedDiskInfo;
    });
}
