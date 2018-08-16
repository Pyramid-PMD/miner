import _ from 'lodash';
// const drivelist = require('drivelist');
const wmic = require('wmic');
export const getDiskId = () => {
    //if (process.env.NODE_ENV === 'development') return new Promise((resolve, reject) => resolve('7654321'));
    if (process.platform === 'win32') {
        const exec = require('child_process').exec;
        const winCmd = 'wmic DISKDRIVE get SerialNumber';
        return new Promise((resolve, reject) => {
            exec(winCmd, ((error, stdout) => {
                if (!error) {
                    console.log(stdout);
                    resolve(stdout.replace('SerialNumber', '').trim());
                }
                reject(error);
            }));
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
        // console.log('drivelist', drivelist);
        // drivelist.list((error, drives) => {
        //     if (error) {
        //         console.log('error', error);
        //         reject(error);
        //     }
        //     const filtered = drives.filter((drive) => drive.isSystem && !drive.isVirtual && !drive.isRemovable);
        //     let mountpoints = [];
        //     // filtered.forEach(drive => {
        //     //     const { mountpoints } = drive;
        //     //     mountpoints.push(...mountpoints)
        //     // });
        //     // console.log('mount points', mountpoints);
        //     console.log('drives', filtered);
        //     resolve(['A', 'B', 'C']);
        // });
        // if (process.platform === 'win32') {
        //     const exec = require('child_process').exec;
        //     const winCmd = 'wmic logicaldisk get name\n';
        //     exec(winCmd, ((error, stdout) => {
        //         console.log('drive list', stdout);
        //         const rgx = /\s/gi;
        //         const driveList = stdout
        //             .replace('Name', '')
        //             .trim()
        //             .replace(rgx, '')
        //             .split(':');
        //
        //         driveList.pop();
        //         if (!error) {
        //             resolve(driveList);
        //         }
        //         reject(error);
        //     }));
        // } else {
        //     resolve(['A', 'B', 'C'])
        // }





    });
};