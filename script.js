/* ========= typing animation ========= */

var typed=new Typed(".typing",{
    strings:["","Web Designer","Student","Web Developer"],
    typeSpeed:200,
    BackSpeed:100,
    loop:true
})


document.addEventListener("DOMContentLoaded", function() {
    // Get all nav items
    const navItems = document.querySelectorAll('.nav-item i');

    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            
            // Prevent the default link behavior
            event.preventDefault();

            // Remove the active class from all nav items
            document.querySelectorAll('.nav-item').forEach(nav => {
                nav.classList.remove('active');
                
            });

            // Add the active class to the clicked nav item
            this.parentElement.classList.add('active');
        });
    });
});