const grunt = require('grunt');
module.exports = function(grunt) {
    grunt.initConfig({
        'create-windows-installer': {
            //ia32: {
            //    appDirectory: './release-builds/Pyramid-win32-ia32',
            //    outputDirectory: './installers/win/ia32',
            //    name: 'Pyramid',
            //    description: 'Pyramid hash rate software for miners.',
            //    authors: 'Pyramid Dev Team',
            //    exe: 'Pyramid.exe'
            //},
            x64: {
                appDirectory: './release-builds/Pyramid-win32-x64',
                outputDirectory: './installers/win/x64',
                name: 'Pyramid',
                description: 'Pyramid hash rate software for miners.',
                authors: 'Pyramid Dev Team',
                exe: 'Pyramid.exe'
            }

        }
    });

    grunt.loadNpmTasks('grunt-electron-installer');
};