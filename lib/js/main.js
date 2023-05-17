function changeView(index) {
    var sidebaritems = document.querySelectorAll(".sidebar .sideitem")
    var sidebarfontitems = document.querySelectorAll(".sidebar .addedfonts .sideitem")
    var viewslides = document.querySelectorAll(".fontview .viewslide")
    console.log(sidebaritems)
    console.log(sidebarfontitems)
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
    }
}