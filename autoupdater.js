// Code signing required for autoupdating mac versions
const {autoUpdater, dialog, app} = require('electron');

if (process.platform !== 'darwin' && process.env.NODE_ENV !== 'development') {

    // let updateFeed = `http://localhost:3000/releases/latest`;
    let updateFeed = `http://101.132.161.0:5666/releases/win/latest`;
    // let updateFeed = 'https://s3-ap-northeast-1.amazonaws.com/pyramid-desktop/releases';
    autoUpdater.setFeedURL(updateFeed);

    const initCheck = () => {
        // showDialogue('init check', 'init check');
        autoUpdater.checkForUpdates();
        setTimeout(() => {
            initCheck();
        }, 60 * 1000);
    };

    setTimeout(() => {
        initCheck();
    }, 5000);

    // setTimeout(ater.checkForUpdates();
    //     // }, 5000);
    //     //() => {
    //     autoUpd
    //
    // setInterval(() => {
    //     autoUpdater.checkForUpdates()
    // }, 60 * 60 * 1000);

    autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
        // const dialogOpts = {
        //     type: 'info',
        //     buttons: ['Restart', 'Later'],
        //     title: 'Application Update',
        //     message: process.platform === 'win32' ? releaseNotes : releaseName,
        //     detail: 'A new version has been downloaded. Restart the application to apply the updates.'
        // };
        //
        // dialog.showMessageBox(dialogOpts, (response) => {
        //     if (response === 0) autoUpdater.quitAndInstall()
        // })
        autoUpdater.quitAndInstall()
    });

    autoUpdater.on('error', message => {
        console.error('There was a problem updating the application')
        console.error(message)
        // showDialogue(message, 'update error');
    });

    autoUpdater.on('update-available', message => {
        // showDialogue(message, 'update available');
    });

    autoUpdater.on('checking-for-update', message => {
        // showDialogue(message, 'checking for update');
    });

    autoUpdater.on('update-not-available', message => {
        // showDialogue(message, 'update not available');
    });

    function showDialogue(message, title = 'Auto updater') {
        const dialogOpts = {
            type: 'info',
            title,
            message: message ? JSON.stringify(message): 'No message',
            detail: message? JSON.stringify(message): 'No detail'
        };

        dialog.showMessageBox(dialogOpts)
    }
}
