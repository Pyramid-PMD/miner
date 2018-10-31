// Code signing required for autoupdating mac versions
const {autoUpdater, dialog, app} = require('electron');
const appVersion = app.getVersion();


if (process.platform !== 'darwin' && process.env.NODE_ENV !== 'development') {

    // let updateFeed = `http://localhost:3000/updates/win32/${appVersion}`;
    let updateFeed = `http://101.132.161.0:5666/releases/win/latest`;
    autoUpdater.setFeedURL(updateFeed);
    setInterval(() => {
        autoUpdater.checkForUpdates()
    }, 3 * 60 * 1000);



    autoUpdater.on('checking-for-update',()=>{
        console.log('checking for update');
        const dialogOpts = {
            type: 'info',
            buttons: ['Restart', 'Later'],
            title: 'Application checking for update',
            message: 'Application checking for update',
            detail: 'A new version has been downloaded. Restart the application to apply the updates.'
        };

        dialog.showMessageBox(dialogOpts, (response) => {
            if (response === 0) autoUpdater.quitAndInstall()
        })
    });


    autoUpdater.on('update-not-available',()=>{
        console.log('checking for update');
        const dialogOpts = {
            type: 'info',
            buttons: ['Restart', 'Later'],
            title: 'Application update-not-available',
            message: 'Application checking for update',
            detail: 'A new version has been downloaded. Restart the application to apply the updates.'
        };

        dialog.showMessageBox(dialogOpts, (response) => {
            if (response === 0) autoUpdater.quitAndInstall()
        })
    });

    autoUpdater.on('update-available', message => {
        const dialogOpts = {
            type: 'info',
            buttons: ['Restart', 'Later'],
            title: 'Application Update available',
            message,
            detail: 'A new version has been downloaded. Restart the application to apply the updates.'
        };

        dialog.showMessageBox(dialogOpts, (response) => {
            if (response === 0) autoUpdater.quitAndInstall()
        })
    });

    autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
        const dialogOpts = {
            type: 'info',
            buttons: ['Restart', 'Later'],
            title: 'Application Update',
            message: process.platform === 'win32' ? releaseNotes : releaseName,
            detail: 'A new version has been downloaded. Restart the application to apply the updates.'
        };

        dialog.showMessageBox(dialogOpts, (response) => {
            if (response === 0) autoUpdater.quitAndInstall()
        })
    });

    autoUpdater.on('error', message => {
        const dialogOpts = {
            type: 'info',
            buttons: ['Restart', 'Later'],
            title: 'Application Update Error',
            message: JSON.stringify(message),
            detail: 'A new version has been downloaded. Restart the application to apply the updates.'
        };

        dialog.showMessageBox(dialogOpts, (response) => {
            if (response === 0) autoUpdater.quitAndInstall()
        })
    });
}
