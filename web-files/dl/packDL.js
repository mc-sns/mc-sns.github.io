let vList;
let vListSize;
let dlPage;
function setForDL () {
    dlPage = true;
    document.title = "Getting download..";
    document.getElementById("pageIco").setAttribute("href", "https://kckarnige.github.io/mc-sns/dlicon.ico");
}
fetch("https://kckarnige.github.io/mc-sns/meta.json", {
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
            if (document.location.pathname == "/dl/" + vList.versions[i].id) {
                setForDL();
                console.log(vList.versions[i].id)
                document.location = vList.versions[i].mpfile
            }
        }
        if (document.location.pathname == "/dl/0.0.0") {
            setForDL();
            document.location = "https://kckarnige.github.io/mc-sns/versions/0.0.0/iatj_modpack_file_0.0.0.mrpack"
        }
        if (document.location.pathname == "/dl/latest") {
            setForDL();
            fetch("https://kckarnige.github.io/mc-sns/versions/latest/vnum.txt", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                },
            })
                .then((response) => response.text())
                .then((response) => {
                    document.location = "https://kckarnige.github.io/mc-sns/versions/" + response + "/iatj_modpack_file_" + response + ".mrpack"
                })
        }
    })

    if (dlPage) {
        document.getElementById("pageIco").setAttribute("href", "https://kckarnige.github.io/mc-sns/dlicon.ico");
    } else {
        document.getElementById("pageIco").setAttribute("href", "https://kckarnige.github.io/mc-sns/favicon.ico");
    }
window.onload = () => {
    setTimeout(() => {
        if (dlPage) {
            if (history.back() != undefined) {
                history.back()
            } else {
                window.close()
            }
        } else {
            document.location = "https://kckarnige.github.io/mc-sns"
        }
    }, 1000)
}
