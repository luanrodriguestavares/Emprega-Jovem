//Navbar Script//
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuToogleItems = document.getElementById('menu-toogle-items');

    menuToogleItems.classList.add('hidden');
    menuToggle.addEventListener('click', function () {
        menuToogleItems.classList.toggle('hidden');
    });
});

//Navbar Script//