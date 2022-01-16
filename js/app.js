$(".show-sidebar-btn").click(function() {
    $(".sidebar").animate({ marginLeft: 0 })
})
$(".hide-sidebar-btn").click(function() {
    $(".sidebar").animate({ marginLeft: "-100%" }, 400)

})


$(".full-screen-btn").click(function() {
    let current = $(this).closest(".card");
    current.toggleClass("full-screen")
    if (current.hasClass("full-screen")) {
        $(this).addClass("feather-minimize-2")
        $(this).removeClass("feather-miximize-2")
    } else {
        $(this).addClass("feather-miximize-2")
        $(this).removeClass("feather-minimize-2")
    }

})

function go(url) {
    setTimeout(() => {

        location.href = `${url}`

    }, 500);
}