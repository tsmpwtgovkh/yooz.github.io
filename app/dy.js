document.addEventListener('DOMContentLoaded', () => {
    // Handle Buy button click
    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for your purchase! We will be in touch soon.');
        });
    });


});
