const VERSION = "1.0"
const HOMESVG = `<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"/></svg>`
const EXPLORESVG = `<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/></svg>`
const SETTINGSSVG = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><rect fill="none" height="24" width="24"/><path d="M19.5,12c0-0.23-0.01-0.45-0.03-0.68l1.86-1.41c0.4-0.3,0.51-0.86,0.26-1.3l-1.87-3.23c-0.25-0.44-0.79-0.62-1.25-0.42 l-2.15,0.91c-0.37-0.26-0.76-0.49-1.17-0.68l-0.29-2.31C14.8,2.38,14.37,2,13.87,2h-3.73C9.63,2,9.2,2.38,9.14,2.88L8.85,5.19 c-0.41,0.19-0.8,0.42-1.17,0.68L5.53,4.96c-0.46-0.2-1-0.02-1.25,0.42L2.41,8.62c-0.25,0.44-0.14,0.99,0.26,1.3l1.86,1.41 C4.51,11.55,4.5,11.77,4.5,12s0.01,0.45,0.03,0.68l-1.86,1.41c-0.4,0.3-0.51,0.86-0.26,1.3l1.87,3.23c0.25,0.44,0.79,0.62,1.25,0.42 l2.15-0.91c0.37,0.26,0.76,0.49,1.17,0.68l0.29,2.31C9.2,21.62,9.63,22,10.13,22h3.73c0.5,0,0.93-0.38,0.99-0.88l0.29-2.31 c0.41-0.19,0.8-0.42,1.17-0.68l2.15,0.91c0.46,0.2,1,0.02,1.25-0.42l1.87-3.23c0.25-0.44,0.14-0.99-0.26-1.3l-1.86-1.41 C19.49,12.45,19.5,12.23,19.5,12z M12.04,15.5c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S13.97,15.5,12.04,15.5z"/></svg>`
const FONTSVG = `<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.93 13.5h4.14L12 7.98 9.93 13.5zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.29 15.88l-.9-2.38H9.17l-.89 2.37c-.14.38-.5.63-.91.63-.68 0-1.15-.69-.9-1.32l4.25-10.81c.22-.53.72-.87 1.28-.87s1.06.34 1.27.87l4.25 10.81c.25.63-.22 1.32-.9 1.32-.4 0-.76-.25-.91-.62z"/></svg>`
let r = document.querySelector(":root")


// Local database fetching
if (dbGetItem("activefonts") == null) {
    dbSetItem("activefonts",["Open Sans"])
}
let activefonts = dbGetItem("activefonts").split(",")

function updateDB() {
    dbSetItem("activefonts",activefonts)
}

// Sidebar And Slides Functions
let sidebaritems = document.querySelectorAll(".sidebar .sidebaritem")
let fontitems = document.querySelectorAll(".fontsitems .fontitem")


let slides = document.querySelectorAll(".slidebar .slide")
let homeslide = document.querySelector("#homepageslide")
let exploreslide = document.querySelector("#explorepageslide")
let settingslide = document.querySelector("#settingspageslide")
let fontslide = document.querySelector("#fontpageslide")

function switchslide(slide) {
    slides.forEach(element => {
        element.classList.remove("activeslide")
    });
    if (slide == "home") {
        homeslide.classList.add("activeslide")
    } else if (slide == "explore") {
        exploreslide.classList.add("activeslide")
    } else if (slide == "settings") {
        settingslide.classList.add("activeslide")
    } else if (slide == "font") {
        fontslide.classList.add("activeslide")
    }
}

function home() {
    sidebaritems.forEach(element => {
        element.classList.remove("toggleditem")
    })
    sidebaritems[0].classList.add("toggleditem")
    switchslide("home")
}

function explore() {
    sidebaritems.forEach(element => {
        element.classList.remove("toggleditem")
    })
    sidebaritems[1].classList.add("toggleditem")
    switchslide("explore")
}

function settings() {
    sidebaritems.forEach(element => {
        element.classList.remove("toggleditem")
    })
    sidebaritems[2].classList.add("toggleditem")
    switchslide("settings")
}

function font(index,fontname) {
    sidebaritems.forEach(element => {
        element.classList.remove("toggleditem")
    })
    fontitems[index].classList.add("toggleditem")
    switchslide("font")
    r.style.setProperty("--slideshowfont",fontname)
    slideshowfont = fontname
    fontslideupdate()
}

// Add all fonts to the sidebar list
let fontsitemsdiv = document.getElementById("fontsitems")
function initializesidebarfonts() {
    fontsitemsdiv.innerHTML = ""
    index = 0
    activefonts.forEach(element => {
        fontsitemsdiv.innerHTML += `
                <section onclick="font(${index},'${element}')" class="sidebaritem fontitem">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.93 13.5h4.14L12 7.98 9.93 13.5zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.29 15.88l-.9-2.38H9.17l-.89 2.37c-.14.38-.5.63-.91.63-.68 0-1.15-.69-.9-1.32l4.25-10.81c.22-.53.72-.87 1.28-.87s1.06.34 1.27.87l4.25 10.81c.25.63-.22 1.32-.9 1.32-.4 0-.76-.25-.91-.62z"/></svg>
                    </div>
                    <span>${element}</span>
                </section>
        `
        index++
    });
    sidebaritems = document.querySelectorAll(".sidebar .sidebaritem")
    fontitems = document.querySelectorAll(".fontsitems .fontitem")
}

// Active Fonts Functions

function addFont(font) {
    activefonts.push(font)
    updateDB()
    initializesidebarfonts()
}

function delfont(index) {
    activefonts.splice(index,1)
    updateDB()
    initializesidebarfonts()
}
// Font Slide Functions
let slideshowfont = r.style.getPropertyValue("--slideshowfont")
let fontslidetitle = document.querySelector("#fontpageslide #slidetitletext")

function fontslideupdate() {
    fontslidetitle.innerHTML = slideshowfont
}



initializesidebarfonts()