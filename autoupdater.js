// Code signing required for autoupdating mac versions
const {autoUpdater, dialog, app} = require('electron');
const appVersion = app.getVersion();


if (process.platform !== 'darwin' && process.env.NODE_ENV !== 'development') {

    // let updateFeed = `http://localhost:3000/updates/win32/${appVersion}`;
    let updateFeed = `http://101.132.161.0:5666/releases/win/latest`;
    autoUpdater.setFeedURL(updateFeed);
    setInterval(() => {
        autoUpdater.checkForUpdates()
    }, 60 * 1000);

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
        console.error('There was a problem updating the application')
        console.error(message)
    });

    autoUpdater.on('update-available', message => {
        showDialogue('update available');
    });
    autoUpdater.on('checking-for-update', message => {
        showDialogue('checking for update');
    });

    autoUpdater.on('update-not-available', message => {
        showDialogue('update not available');
    });

    function showDialogue(message) {
        const dialogOpts = {
            type: 'info',
            title: 'Application Update',
            message,
            detail: message
        };

        dialog.showMessageBox(dialogOpts)
    }
}
