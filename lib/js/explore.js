let localfonts = [
    Caveat = {
        "facename": "Caveat",
        "dllink": "lib/fonts/Caveat/Caveat-VariableFont_wght.ttf",
    },
    Dancing_Script = {
        "facename": "Dancing Script",
        "dllink": "lib/fonts/Dancing_Script/DancingScript-VariableFont_wght.ttf",
    },
    Fira_Code = {
        "facename": "Fira Code",
        "dllink": "lib/fonts/Fira_Code/FiraCode-VariableFont_wght.ttf",
    },
    Inconsolata = {
        "facename": "Inconsolata",
        "dllink": "lib/fonts/Inconsolata/Inconsolata-VariableFont_wdth,wght.ttf",
    },
    Inter = {
        "facename": "Inter",
        "dllink": "lib/fonts/Inter/Inter-VariableFont_slnt,wght.ttf",
    },
    JetBrains_Mono = {
        "facename": "JetBrains Mono",
        "dllink": "lib/fonts/JetBrains_Mono/Caveat-VariableFont_wght.ttf",
    },
    Montserrat = {
        "facename": "Montserrat",
        "dllink": "lib/fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
    },
    Open_Sans = {
        "facename": "Open Sans",
        "dllink": "lib/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf",
    },
    Raleway = {
        "facename": "Raleway",
        "dllink": "lib/fonts/Raleway/Raleway-VariableFont_wght.ttf",
    },
    Montserrat = {
        "facename": "Source Code Pro",
        "dllink": "lib/fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
    }
]


let explorepagefontdiv = document.querySelector("#explorepageslide .content .fontlist")
function initExplore() {
    explorepagefontdiv.innerHTML = ""
    localfonts.forEach(font => {
        explorepagefontdiv.innerHTML += `
                        <div class="fontitembox">
                            <div class="row">
                                <span class="fontname">${font.facename}</span>
                                <a href="${font.dllink}" class="downloadfont">D</a>
                                <div onclick="addFont(${font.facename})" class="addfont">A</div>
                            </div>
                            <div class="row">
                                <div style="font-family: '${font.facename}'" class="fontcontent">
                                    Dark Reef Rising
                                </div>
                            </div>
                        </div>
        `
        console.log(font)
    })
}

initExplore()