(function(){
    const menuButton = document.querySelector('.menu-hamburguesa');
    const navList = document.querySelector('.nav-list');

    menuButton.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
})();