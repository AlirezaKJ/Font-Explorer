function changeView(index) {
    var sidebaritems = document.querySelectorAll(".sidebar .sideitem")
    var sidebarfontitems = document.querySelectorAll(".sidebar .addedfonts .sideitem")
    console.log(sidebaritems)
    console.log(sidebarfontitems)
    sidebaritems.forEach((item) => {
        item.classList.remove("activebar")
    })
    if (index === -1) {
        // Change View To Home
        sidebaritems[0].classList.add("activebar")
    } else if (index === -2) {
        // Change View To Explore
        sidebaritems[1].classList.add("activebar")
    } else {
        // Change View To A Font
        sidebarfontitems[index].classList.add("activebar")
    }
}