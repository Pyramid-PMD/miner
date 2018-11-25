const wmic = require('wmic');
const sha3 = require("crypto-js/sha3");
const macaddress = require('macaddress-secure');
const qrCodeGen = require('qrcode');
const {getEthernetMac} = require('./mac-address');
import 'moment/locale/zh-cn';
import moment from 'moment';
const diskInfo = require('../../../diskInfo');
const async = require('async');
const fs = require('fs');
const Buffer = require('buffer').Buffer;
const os = require('os');
const { app } =  require('electron').remote;
const path = require('path');


export const getDiskId = () => {
    return diskInfo.getDiskId();
};


export const getDriveList = () => {
    const defaultList = ['A', 'B', 'C'];
    return new Promise((resolve, reject) => {
        if (process.platform === 'win32') {
            // Drive type
            // 0 = Unknown
            // 1 = No Root Directory
            // 2 = Removable Disk
            // 3 = Local Disk
            // 4 = Network Drive
            // 5 = Compact Disc
            // 6 = RAM DISKDRIVE
            wmic.get_values('logicaldisk', 'name, volumename, drivetype', null, function(error, drives) {
                if (error) {
                    console.log('error', error);
                    reject(error);
                }
                const filtered = drives.filter((drive) => drive.DriveType === "3");
                if (filtered.length > 0) {
                    const names = filtered.map(drive => drive.Name.replace(':', '') );
                    resolve(names); // An array of disks
                }
            })
        }
        else {
            resolve(defaultList);
        }
    });
};

export const getMacAddress = () => {
    return getEthernetMac();
};

export const generateQrCode = (source) => {
    const options = {
        errorCorrectionLevel: 'H',
        rendererOpts: {
            quality: 1
        }
    };
    return qrCodeGen.toDataURL(source, options);
};

/**
 * Checks if the given string is a checksummed address
 *
 * @method isChecksumAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
 */
const isChecksumAddress = function (address) {
    // Check each case
    address = address.replace('0x','');
    const addressHash = sha3(address.toLowerCase());
    for (let i = 0; i < 40; i++ ) {
        // the nth letter should be uppercase if the nth digit of casemap is 1
        if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
            return false;
        }
    }
    return true;
};

/**
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
 */
export const isAddress = function (address) {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        // check if it has the basic requirements of an address
        return false;
    } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
        // If it's all small caps or all all caps, return true
        return true;
    } else {
        // Otherwise check each case
        return isChecksumAddress(address);
    }
};


export function setMomentLocale(lang) {
    const locale = lang === 'cn' ? 'zh-cn' : 'en';
    moment.locale(locale);
}


const generateDataFilesPath = (partition) => {
    return process.platform === 'win32' ? `${partition}:/PMDATA/` : `${os.homedir()}/Library/Application Support/${app.getName()}/PMDATA/`;
};


const createDirectory  = (filePath) => {
    const dirname = path.dirname(filePath);

    if (!fs.existsSync(dirname)) {
        createDirectory(dirname);
    }
    fs.mkdirSync(filePath);
};


export const generateDataFiles = (partition = 'D') => {
    // console.log('calling generate files', app.getName());
    const filesArray = [],
        size = process.env.NODE_ENV === 'development' ? 1024 : 1024 * 1024,
        content = new Buffer(size),
        path = generateDataFilesPath(partition),
        FILES_COUNT = 1000;

    createDirectory(path);

    for (let i = 0; i < FILES_COUNT; i++) {
        const fileName = pad((i + 1), 6),
            file = {
                filePath: `${path}${fileName}.dat`
            };
        filesArray.push(file);

        console.log('filename',fileName);
    }

    async.map(filesArray, getInfo, function (e, r) {
        // console.log('writing files', r);
        // console.log('writing files error', e);
    });
    function getInfo(file, callback) {
        fs.writeFile(file.filePath, content, callback);
    }
};


function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}