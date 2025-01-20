document.addEventListener("DOMContentLoaded", function () {
    // Get all minus and plus buttons
    const minusButtons = document.querySelectorAll('.btn-minus');
    const plusButtons = document.querySelectorAll('.btn-plus');

    // Add event listeners to minus buttons
    minusButtons.forEach(button => {
        button.addEventListener('click', function () {
            const input = this.nextElementSibling; // The input field after the minus button
            let value = parseInt(input.value, 10);

            // Decrease the value if greater than 1
            if (value > 1) {
                input.value = value - 1;
            }
        });
    });

    // Add event listeners to plus buttons
    plusButtons.forEach(button => {
        button.addEventListener('click', function () {
            const input = this.previousElementSibling; // The input field before the plus button
            let value = parseInt(input.value, 10);

            // Increase the value
            input.value = value + 1;
        });
    });
});