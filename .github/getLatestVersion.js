let vList = JSON.parse(fs.readFileSync(path.join(__dirname,"..","meta.json")));
const path = require('path');
const fs = require('fs');


fs.cpSync(path.join(__dirname,"..","versions",vList.versions[vList.versions.length].id,"vnum.txt"), path.join(__dirname,"..","versions","latest","vnum.txt"), {recursive: true, force: true});