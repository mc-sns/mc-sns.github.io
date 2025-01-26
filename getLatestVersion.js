const path = require('path');
const fs = require('fs');

fetch("https://raw.githubusercontent.com/iatj-modpack/iatj-modpack.github.io/main/meta.json", {
  method: "GET",
  headers: {
      Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((response) => {
      console.log("Fetched!")
      vList = response;
      for (var i = 0; i < vList.versions.length; i++) {
        var vListLength = vList.versions.length+-1;
        if (i == vListLength) {
            fs.cpSync(path.join(__dirname,"versions",vList.versions[i].id), path.join(__dirname,"versions","latest"), {recursive: true, force: true});
        }
    }
  })