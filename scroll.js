document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('header');
    var lastScrollTop = 0;
    const brush = document.getElementById('brush');
    const logo = document.getElementById('signature');
    const links = document.querySelectorAll('.nav_links');

    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 0) { // If scroll position is not at the top
            header.classList.add('scrolled');
            brush.style.display = 'none';
            logo.style.height = '50px';
            links.forEach(link => {
                link.style.filter = 'invert(100%)';
            });
        } else { // If scroll position is at the top
            header.classList.remove('scrolled');
            brush.style.display = 'block'; 
            logo.style.height = '80px'; 
            links.forEach(link => {
                link.style.filter = 'none'; 
            });
        }
        lastScrollTop = scrollTop; // Update last scroll position
    });
});