// TODO: Refactor to utils.js file
export const getDiskId = () => {
    console.log('process', process);
    //if (process.env.NODE_ENV === 'development') return new Promise((resolve, reject) => resolve('7654321'));
    const os = require('os');
    if (process.platform === 'win32') {
        const exec = require('child_process').exec;
        const winCmd = 'wmic DISKDRIVE get SerialNumber';
        return new Promise((resolve, reject) => {
            exec(winCmd, ((error, stdout) => {
                if (!error) {
                    resolve(stdout.replace('SerialNumber', '').trim());
                }
                //reject(error);
            }));
        })
    } else {
        return new Promise((resolve, reject) => resolve('7654321'))
    }
};
