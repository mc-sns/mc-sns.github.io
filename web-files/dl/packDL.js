let vList;
let vListSize;
let dlPage;
function setForDL () {
    dlPage = true;
    document.title = "Getting download..";
    document.getElementById("pageIco").setAttribute("href", "https://mc-sns.github.io/dlicon.ico");
}
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
                dlUrl = "https://mc-sns.github.io/versions/" + vList.versions[i].id + "/sticks_n_stones.mrpack"
                const a = document.createElement('a') // Create <a>
                a.href = dlUrl
                a.download = "sticks_n_stones_"+vList.versions[i].id+".mrpack" // File name Here
                a.click() // Downloaded file
            }
        }
        if (document.location.pathname == "/dl/latest") {
            setForDL();
            fetch("https://mc-sns.github.io/versions/latest/vnum.txt", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                },
            })
                .then((response) => response.text())
                .then((response) => {
                    dlUrl = "https://mc-sns.github.io/versions/" + response + "/sticks_n_stones.mrpack"
                    const a = document.createElement('a') // Create <a>
                    a.href = dlUrl
                    a.download = "sticks_n_stones_"+response+".mrpack" // File name Here
                    a.click() // Downloaded file
                })
        }
    })

    if (dlPage) {
        document.getElementById("pageIco").setAttribute("href", "https://mc-sns.github.io/dlicon.ico");
    } else {
        document.getElementById("pageIco").setAttribute("href", "https://mc-sns.github.io/favicon.ico");
        window.onload = () => {
            setTimeout(() => {
                if (dlPage) {
                    if (history.back() != undefined) {
                        history.back()
                    } else {
                        window.close()
                    }
                } else {
                    document.location = "https://mc-sns.github.io"
                }
            }, 1000)
    }

}
