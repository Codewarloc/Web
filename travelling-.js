window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    let parallaxElement = document.querySelector('.parallax');
    parallaxElement.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
});

window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    let parallaxElement = document.querySelector('.nav');
    parallaxElement.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
});

window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    let parallaxElement = document.querySelector('');
    parallaxElement.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
});

window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    // Adjust the threshold (e.g., 200) to your desired value
    if (window.pageYOffset > 200) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}
// window.onscroll = function() {
//     var navbar = document.getElementById("navbar");
//     // Adjust the threshold (e.g., 200) to your desired value
//     if (window.pageYOffset > 200) {
//         navbar.style.top = "30";
//     } else {
//         navbar.style.top = "px"; // Hide the navbar
//     }
// }
