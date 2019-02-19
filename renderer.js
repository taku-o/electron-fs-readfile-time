// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
    var fileName = 'dm-package.json';
    function readFile(callback) {
        var fs = require('fs');
        fs.readFile(fileName, {encoding: 'utf8'}, (ferr, object) => {
            if (ferr) {
                if (ferr.code === 'ENOENT') {
                    return callback({});
                }
                return callback(ferr);
            }

            try {
                const objectJSON = JSON.parse(object);
                return callback(objectJSON);
            } catch (error) {
                return callback(new Error('Invalid data'));
            }
        });
    }

    function readFile2(callback) {
        var json = require('./dm-package.json');
        return callback(json);
    }

    var label = 'renderer';
    console.time(label);
    readFile2(function(data) {
        console.log(data);
        console.timeEnd(label);
    });

