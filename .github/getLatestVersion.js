const path = require('path');
const fs = require('fs');
let vList = require("../meta.json")


fs.cpSync(path.join(__dirname,"..","versions",vList.versions[vList.versions.length-1].id,"vnum.txt"), path.join(__dirname,"..","versions","latest","vnum.txt"), {recursive: true, force: true});