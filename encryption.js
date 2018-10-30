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
          // macaddress = await getMacAddress(),
          macaddress = 'DE-15-D3-D3-13-B2',
          stringToEncrypt = `MAC:${macaddress}\rDISK:${diskId}`;

    console.log('stringToEncrypt', stringToEncrypt);

    return new Promise((resolve, reject) => {
        encryptor(stringToEncrypt, function (error, result) {
            if (error) {
                reject(error);
            }
            const encryptedDisk = result.replace(/9000(?!.*9000)/, '');
            console.log('encrypted disk', encryptedDisk);
            resolve(encryptedDisk);
        });
    });
}

module.exports = {runEncryption};
