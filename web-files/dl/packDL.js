let vList;
let vListSize;
let dlPage;
function setForDL() {
    dlPage = true;
    document.title = "Getting download..";
}

if (document.location.pathname.split("/")[1] == "dl") {
    setForDL();
    let modpackVersion;
    fetch("https://mc-sns.github.io/meta.json", {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => response.json())
        .then((response) => {
            console.log("Fetched!")
            vList = response;
            if (document.location.pathname == "/dl/latest") {
                modpackVersion = vList.versions[vList.versions.length - 1].id
            } else {
                for (var i = 0; i < vList.versions.length; i++) {
                    if (document.location.pathname == "/dl/" + vList.versions[i].id) {
                        modpackVersion = vList.versions[i].id
                    }
                }
            }
        })
        .then(() => {
            if (modpackVersion != undefined || null) {
                const a = document.createElement('a')
                a.href = `https://mc-sns.github.io/versions/${modpackVersion}/modpack_file.mrpack`
                a.download = `sticks_n_stones_${modpackVersion}.mrpack`
                document.body.appendChild(a)
                a.click()
                if (history.back() != undefined) {
                    history.back()
                } else {
                    window.close()
                }
            } else {
                console.log("Womp womp, something broke")
            }
        })
}

if (dlPage) {
    document.getElementById("pageIco").setAttribute("href", "https://mc-sns.github.io/dlicon.ico");
} else {
    document.getElementById("pageIco").setAttribute("href", "https://mc-sns.github.io/favicon.ico");
    window.onload = () => {
        setTimeout(() => {
            document.location = "https://mc-sns.github.io"
        }, 800)
    }

}
