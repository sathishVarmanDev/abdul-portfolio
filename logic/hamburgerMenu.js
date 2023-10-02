document.querySelectorAll('.mobile-menu a').forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        document.getElementById('toggle').checked = false;
    });
});
