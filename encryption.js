const edge = require('electron-edge');
const {dialog, app} = require('electron');
const {getDiskId, getMacAddress} = require('./diskInfo');

let encryptorPath;

if (process.env.NODE_ENV === 'development') {
    encryptorPath = './delivery/Doji.Sharp.dll';
} else {
    encryptorPath = './resources/delivery/Doji.Sharp.dll';
}

const encryptor = edge.func(encryptorPath);

async function runEncryption () {
    const diskId = await getDiskId(),
          macaddress = await getMacAddress(),
          // macaddress = 'DE-15-D3-D3-13-B2',
          stringToEncrypt = `MAC:${macaddress}\\rDISK:${diskId}`;

    return new Promise((resolve, reject) => {
        console.log('stringToEncrypt', stringToEncrypt);

        encryptor(stringToEncrypt, function (error, result) {
            if (error) {
                console.log('encryption error', error);
                reject(error);
            }
            console.log('encrypted disk', result);

            const encryptedDisk = result.replace(/9000(?!.*9000)/, '');
            resolve(encryptedDisk);
        });
    });
}

module.exports = {runEncryption};
