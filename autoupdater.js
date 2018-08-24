// Code signing required for autoupdating mac versions
const {autoUpdater, dialog, app} = require('electron');
const appVersion = app.getVersion();


if (process.platform !== 'darwin' && process.env.NODE_ENV !== 'development') {
    // let updateFeed = 'https://s3.amazonaws.com/pyramid-desktop/releases/win32';

    let updateFeed = `http://localhost:3000/updates/win32/${appVersion}`;

    console.log('feed', updateFeed);
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
}
