const edge = require('electron-edge');

helloWorld = edge.func('delivery/Doji.Sharp.dll');

helloWorld('MAC:\\r819323,DISK:1823018230\\r', function (error, result) {
    if (error) throw error;
    console.log(result);
});