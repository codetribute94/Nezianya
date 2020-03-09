var elem = document.querySelector('.sidenav');
var instance = M.Sidenav.init(elem, {
    onOpenStart: function () {
        console.log("I trigger as soon as the page is loaded");
    },
    onCloseEnd: function () {
        console.log("same");
    }
});

const signup = document.querySelector('#signup');
