const edge = require('electron-edge');
const {dialog, app} = require('electron');
const {getDiskId, getMacAddress} = require('./app/src/Services/Utils');

encryptor = edge.func('./resources/delivery/Doji.Sharp.dll');



const runEncryption = async () => {
    const diskId = await getDiskId(),
          macaddress = await getMacAddress(),
          stringToEncrypt = `MAC:\\r${macaddress},DISK:${diskId}\\r`;
    return new Promise((resolve, reject) => {
        encryptor(stringToEncrypt, function (error, result) {
            if (error) {
                reject(error);
            }
            console.log(result);
            resolve(result);
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
    });
};

module.exports = runEncryption;
