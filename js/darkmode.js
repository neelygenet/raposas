function darkLight() {
    "dark" != localStorage.toggled ? ($("head").append(
        '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/neelygenet/raposas@${UI.version}/css/dark-mode.css" type="text/css" />'
    ), localStorage.toggled = "dark") : ($(
            'link[href="https://cdn.jsdelivr.net/gh/neelygenet/raposas@${UI.version}/css/dark-mode.css"]')
        .remove(), localStorage.toggled = "")
}
$("#main").toggleClass(localStorage.toggled), "dark" == localStorage.toggled && $("head").append(
    '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/neelygenet/raposas@${UI.version}/css/dark-mode.css" type="text/css" />'
);