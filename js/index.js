//open nav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
//toggle singers
    $('.toggle-element').click(function() {
        var $content = $(this).next('.toggle-content');
        
        // Close all other open toggle-content
        $('.toggle-content').not($content).slideUp();

        // Toggle the clicked toggle-content
        $content.slideToggle();
    });




//countdown
// Set the date we're counting down to
const countDownDate = new Date("Jul 26, 2024 00:00:00").getTime();

// Update the countdown every second
const countdownTimer = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the countdown date
    const distance = countDownDate - now;
    
    // Calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the element with id="countdown"

        document.getElementById("days").innerHTML = `
        ${days}d `;
        document.getElementById("hours").innerHTML = `
         ${hours}h `;
        document.getElementById("min").innerHTML = `
         ${minutes}m `;
        document.getElementById("sec").innerHTML = `
         ${seconds}s`;

    
    // If the countdown is over, write some text 
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000); // Update every second

//char left
const textarea = document.getElementById('myTextarea');
const charCount = document.getElementById('charCount');

textarea.addEventListener('input', function() {
    const maxLength = parseInt(textarea.getAttribute('maxlength'));
    const currentLength = textarea.value.length;
    const remaining = maxLength - currentLength;

    charCount.textContent = `${remaining} characters remaining`;

    // Disable textarea if maximum length is exceeded
    if (remaining < 0) {
        textarea.value = textarea.value.substring(0, maxLength); // Trim excess characters
        textarea.setAttribute('disabled', true); // Disable textarea
        charCount.textContent = `Maximum length (${maxLength} characters) reached`; // Update message
    } else {
        textarea.removeAttribute('disabled'); // Enable textarea
    }
});




