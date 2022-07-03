// ПРЕЛОАДЕР
window.onload = function () {
    document.body.classList.add('app-preload')
    document.body.classList.add('loaded_look');
    window.setTimeout(function () {
        document.body.classList.add('loaded_hiding');
        document.body.classList.remove('app-preload');
        window.setTimeout(function () {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding');
        }, 1000);
    }, 2000);
}