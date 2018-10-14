const edge = require('electron-edge');
const {dialog, app} = require('electron');

helloWorld = edge.func('./resources/delivery/Doji.Sharp.dll');

helloWorld('MAC:\\r819323,DISK:1823018230\\r', function (error, result) {
    if (error) throw error;
    console.log(result);
    const dialogOpts = {
        type: 'info',
        title: 'Hardware Info',
        message: result,
        detail: result
    };

    setTimeout(() => {
        dialog.showMessageBox(dialogOpts, (response) => {
        })
    }, 3000);

});