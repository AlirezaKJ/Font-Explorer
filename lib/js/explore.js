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
                            <div class="row row1">
                                <span class="fontname">${font.facename}</span>
                                <div class="btns">
                                    <a href="${font.dllink}" class="downloadfont">
                                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><g><rect fill="none" height="24" width="24"/></g><g><path d="M12,2C6.49,2,2,6.49,2,12s4.49,10,10,10s10-4.49,10-10S17.51,2,12,2z M11,10V7c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v3 h1.79c0.45,0,0.67,0.54,0.35,0.85l-2.79,2.79c-0.2,0.2-0.51,0.2-0.71,0l-2.79-2.79C8.54,10.54,8.76,10,9.21,10H11z M16,17H8 c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v0C17,16.55,16.55,17,16,17z"/></g></svg>
                                    </a>
                                    <div onclick="addFont('${font.facename}')" class="addfont">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="#ffffff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="row row2">
                                <div style="font-family: '${font.facename}'" class="fontcontent">
                                    When the garbage mans get tired, town become a mess; they are valuable.
                                </div>
                            </div>
                        </div>
        `
        console.log(font)
    })
}

// 

initExplore()