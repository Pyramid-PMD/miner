if (require('electron-squirrel-startup')) return;
require('./autoupdater');

// Basic init
const electron = require('electron')
const {app, BrowserWindow} = electron
const path = require('path');
const url = require('url');


const MenuBuilder  = require('./menu');

// Let electron reloads by itself when webpack watches changes in ./app/
if (process.env.NODE_ENV === 'development') require('electron-reload')(__dirname);

const iconPath = path.join(__dirname, '/app/assets/icons/png/64x64.png');
// To avoid being garbage collected
let mainWindow;

app.on('ready', () => {


    mainWindow = new BrowserWindow({
        width: 1280,
        height: 900,
        minWidth: 800,
        minHeight: 600,
        backgroundColor: '#282f33',
        icon: iconPath,
        autoHideMenuBar: true,
        titleBarStyle: 'hidden'
    });

    const startUrl = url.format({
            pathname: path.join(__dirname, '/app/index.html'),
            protocol: 'file:',
            slashes: true
        });

    mainWindow.loadURL(startUrl);


    const menuBuilder = new MenuBuilder(mainWindow);
    menuBuilder.buildMenu();


    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.setTitle(`${app.getName()} ${app.getVersion()}`)
    });
    
});

