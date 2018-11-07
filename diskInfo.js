const wmic = require('wmic');
const qrCodeGen = require('qrcode');
const {getEthernetMac} = require('./app/src/Services/mac-address');


const getDiskId = () => {
    // if (process.env.NODE_ENV === 'development') return new Promise((resolve, reject) => {
    //     resolve('3350_4330_4B23_5209_0025_3859_0000_0001');
    // });
    if (process.platform === 'win32') {
        return new Promise((resolve, reject) => {
            wmic.get_values('DISKDRIVE', 'Name, SerialNumber, MediaType, InterfaceType', null, function(error, drives) {
                if (error) {
                    console.log('error', error);
                    reject(error);
                }
                console.log('serial', drives);
                //InterfaceType === "IDE" || drive.InterfaceType === "SCSI"
                const filtered = drives.filter((drive) => drive.MediaType === 'Fixed hard disk media' );
                if (filtered.length > 0) {
                    const serials = filtered.map(drive => drive.SerialNumber);
                    resolve(serials[0].replace(/\./g, ''));
                } else {
                    reject('No local disks found');
                }
            });
        })

    } else {
        return new Promise((resolve, reject) => resolve('S314JA0FA71976'))
    }
};


const getMacAddress = () => {
    return getEthernetMac();
};

const generateQrCode = (source) => {
    return qrCodeGen.toDataURL(source);
};



module.exports = {
    getMacAddress,
    getDiskId,
    generateQrCode
};