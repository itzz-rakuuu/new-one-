document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle functionality
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close mobile menu when clicking a link
    const links = document.querySelectorAll(".nav-links li a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
            }
        });
    });

    // Booking form submission handler
    const bookingForm = document.getElementById("booking-form");
    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevents page reload
            
            // Gather form data
            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const checkin = document.getElementById("checkin").value;
            const checkout = document.getElementById("checkout").value;
            
            // In a real application, you would send this to a backend server here.
            // For now, we simulate a successful booking request.
            alert(`Thank you, ${name}! Your booking request for ${checkin} to ${checkout} has been received. Our team will contact you at ${phone} to confirm the reservation.`);
            
            // Reset the form
            bookingForm.reset();
        });
    }

    // Set minimum dates for date pickers to today
    const dateInputs = document.querySelectorAll('input[type="date"]');
    if (dateInputs.length > 0) {
        const today = new Date().toISOString().split('T')[0];
        dateInputs.forEach(input => {
            input.setAttribute('min', today);
        });
    }
});