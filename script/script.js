let images = document.querySelectorAll('.container img');
let currentIndex = 0;

setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}, 3000); // Change image every 3 seconds


console.log("here");

document.addEventListener('DOMContentLoaded', function () {
    function showSidebar() {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.classList.add('show');
        }
    }

    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.classList.remove('show');
        }
    }

    // Event listeners for the hamburger menu and close button
    document.querySelector('.menu-button').onclick = showSidebar;
    document.querySelector('.close-sidebar').onclick = hideSidebar;
});





