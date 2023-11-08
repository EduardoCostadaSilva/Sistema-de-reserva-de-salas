const bookingForm = document.getElementById("bookingForm");
const confirmation = document.getElementById("confirmation");

bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    confirmation.style.display = "block";
    setTimeout(function () {
        confirmation.style.display = "none";
        bookingForm.reset();
    }, 3000);
});
