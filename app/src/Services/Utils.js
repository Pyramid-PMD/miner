const wmic = require('wmic');
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

