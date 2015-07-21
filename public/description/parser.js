/**
 * Created by PhilBeadle on 13/07/2015.
 */
var fs = require('fs');
var Q = require('q');
var gherkinLines = '';
function parseLine(markdown, line, preFix) {
    if (line.lastIndexOf(markdown, 0) === 0) {
        line = line.replace(markdown, '');
        gherkinLines += (preFix + line +'\n');
    }
}
function parseFeatureLine(line, preFix) {
    if (line.lastIndexOf('#', 0) === 0) {
        if(line.substring(0, 2) != "##"){
            line = line.replace('#', '');
            gherkinLines += (preFix + line +'\n');
        }
    }
}
var parse = function(fileName) {
    console.log(fileName);
    fs.readFile(fileName, 'utf8', function(err, markdown) {
        if (err) throw err;
        var lines = markdown.split(/\r\n|\r|\n/g);
        fileName = fileName.replace('markdown', 'features').replace('.md', '.feature')
        for (var line = 0; line < lines.length; line++) {
            parseFeatureLine(lines[line], '@dev\nFeature: ');
            parseLine('##', lines[line], '\n\tScenario: ');
            parseLine('1.', lines[line], '\t\tGiven');
            parseLine('2.', lines[line], '\t\tWhen');
            parseLine('3.', lines[line], '\t\tThen');
            if (lines[line].lastIndexOf('|', 0) === 0) {
                gherkinLines += ('\t\t\t' + lines[line] + '\n');
            }
        }
        var gherkinFile = fileName.replace('public/description', 'tests/cucumber/features').replace('.md', '.feature');
        console.log(gherkinFile);
        fs.writeFile(gherkinFile, gherkinLines, function(err) {
        });
    });
};

function watchFolder(folderName) {
    fs.watch(folderName, function(event, filename) {
        if (filename.indexOf('.md', filename.length - 3) !== -1) {
            gherkinLines = '';
            parse(folderName + filename);
        }
    });
}
watchFolder('/Projects/zeno/public/description/Delivery/web-application/');
