const grunt = require('grunt');
module.exports = function(grunt) {
    grunt.initConfig({
        'create-windows-installer': {
            ia32: {
                appDirectory: './release-builds/Pyramid-win32-ia32',
                outputDirectory: './releases',
                name: 'Pyramid',
                description: 'Pyramid hash rate software for miners.',
                authors: 'Pyramid Dev Team',
                exe: 'Pyramid.exe'
            }
        }
    });

    grunt.loadNpmTasks('grunt-electron-installer');
};