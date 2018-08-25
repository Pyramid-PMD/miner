const wmic = require('wmic');
const sha3 = require("crypto-js/sha3");
export const getDiskId = () => {
    //if (process.env.NODE_ENV === 'development') return new Promise((resolve, reject) => resolve('7654321'));
    if (process.platform === 'win32') {
        return new Promise((resolve, reject) => {
            wmic.get_values('DISKDRIVE', 'Name, SerialNumber, MediaType, InterfaceType', null, function(error, drives) {
                if (error) {
                    console.log('error', error);
                    reject(error);
                }
                console.log('serial', drives);
                const filtered = drives.filter((drive) => drive.InterfaceType === "IDE");
                if (filtered.length > 0) {
                    const serials = filtered.map(drive => drive.SerialNumber);
                    resolve(serials[0]); // An array of disks
                }
            });
        })

    } else {
        return new Promise((resolve, reject) => resolve('S314JA0FA71976'))
    }
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


