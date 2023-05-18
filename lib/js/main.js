if (dbGetItem("addedfonts") === null) {dbSetItem("addedfonts","sans-serif")}

let user = {
    addedfonts: dbGetItem("addedfonts").split(","),
}

function updateDB() {
    dbSetItem("addedfonts",user.addedfonts.join(","))
}

let sidebaritems = document.querySelectorAll(".sidebar .sideitem")
let sidebarfontitems = document.querySelectorAll(".sidebar .addedfonts .sideitem")
let viewslides = document.querySelectorAll(".fontview .viewslide")
let currentactivefont = ""

function refreshTabs() {
    var sidebarfontitembox = document.querySelector(".sidebar .addedfonts")
    sidebarfontitembox.innerHTML = ""
    user.addedfonts.forEach((font,index) => {
        sidebarfontitembox.innerHTML += `
        <div onclick="changeView(${index})" class="sideitem barfont">
            <div class="fonticon">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.93 13.5h4.14L12 7.98 9.93 13.5zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.29 15.88l-.9-2.38H9.17l-.89 2.37c-.14.38-.5.63-.91.63-.68 0-1.15-.69-.9-1.32l4.25-10.81c.22-.53.72-.87 1.28-.87s1.06.34 1.27.87l4.25 10.81c.25.63-.22 1.32-.9 1.32-.4 0-.76-.25-.91-.62z"/></svg>
            </div>
            <span class="fontname">${font}</span>
        </div>`
    })
    sidebaritems = document.querySelectorAll(".sidebar .sideitem")
    sidebarfontitems = document.querySelectorAll(".sidebar .addedfonts .sideitem")
    viewslides = document.querySelectorAll(".fontview .viewslide")

}

function addNewFont(font = "sans-serif") {
    user.addedfonts.push(font)
    updateDB()
    refreshTabs()
    lastfontindex = user.addedfonts.length - 1
    changeView(lastfontindex)
}

function changeView(index) {
    sidebaritems.forEach((item) => {
        item.classList.remove("activebar")
    })
    viewslides.forEach((item) => { 
        item.classList.remove("activeslide")
    })
    if (index === -1) {
        // Change View To Home
        sidebaritems[0].classList.add("activebar")
        viewslides[0].classList.add("activeslide")
    } else if (index === -2) {
        // Change View To Explore
        sidebaritems[1].classList.add("activebar")
        viewslides[1].classList.add("activeslide")

    } else {
        // Change View To A Font
        sidebarfontitems[index].classList.add("activebar")
        viewslides[2].classList.add("activeslide")
        currentactivefont = user.addedfonts[index]
        changeFontView(currentactivefont)

    }
}

function changeFontView(font) {
    var fontview = document.querySelector(".fontview .fontslide .slidetitle")
    fontview.innerHTML = font
}

function startup() {
    refreshTabs()
    changeView(-1)
}