function updateDateTime() {
    const currentDateTimeElement = document.getElementById('current-date-time');
    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const currentDate = now.toLocaleDateString('en-US', dateOptions);
    const currentTime = now.toLocaleTimeString('en-US', timeOptions);
    const currentDateTime = `${currentDate} ${currentTime}`;
    currentDateTimeElement.textContent = currentDateTime;
}

// Update date and time initially and set interval
updateDateTime();
setInterval(updateDateTime, 1000);



window.onscroll = function() {stickyNavbar()};

        function stickyNavbar() {
            var navbar = document.getElementById("myTopnav");
            var sticky = navbar.offsetTop;

            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
        }

        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }