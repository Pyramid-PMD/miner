// TODO: Refactor to utils.js file
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
    return new Promise((resolve, reject) => {
        if (process.platform === 'win32') {
            const exec = require('child_process').exec;
            const winCmd = 'wmic logicaldisk get name\n';
            exec(winCmd, ((error, stdout) => {
                console.log('drive list', stdout);
                const rgx = /\s/gi;
                const driveList = stdout
                    .replace('Name', '')
                    .trim()
                    .replace(rgx, '')
                    .split(':');

                driveList.pop();
                if (!error) {
                    resolve(driveList);
                }
                reject(error);
            }));
        } else {
            resolve(['A', 'B', 'C'])
        }

    });
};