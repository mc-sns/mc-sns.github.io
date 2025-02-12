let vList;
let vListSize;
let dlPage;
function setForDL() {
    dlPage = true;
    document.title = "Getting download..";
}

if (document.location.pathname.split("/")[1] == "dl") {
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
            for (var i = 0; i < vList.versions.length; i++) {
                if (document.location.pathname == "/dl/" + vList.versions[i].id) {
                    setForDL();
                    console.log(vList.versions[i].id)
                    const a = document.createElement('a')
                    a.href = `https://mc-sns.github.io/versions/${vList.versions[i].id}/modpack_file.mrpack`
                    a.download = `sticks_n_stones_${vList.versions[i].id}.mrpack`
                    document.body.appendChild(a)
                    a.click()
                    if (history.back() != undefined) {
                        history.back()
                    } else {
                        window.close()
                    }
                }
            }
            if (document.location.pathname == "/dl/latest") {
                setForDL();
                const a = document.createElement('a')
                a.href = `https://mc-sns.github.io/versions/${vList.versions[vList.versions.length].id}/modpack_file.mrpack`
                a.download = `sticks_n_stones_${vList.versions[vList.versions.length].id}.mrpack`
                document.body.appendChild(a)
                a.click()
                if (history.back() != undefined) {
                    history.back()
                } else {
                    window.close()
                }
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
        }, 1000)
    }

}
