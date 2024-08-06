
//form validation that says it must include @ in it
document.addEventListener('DOMContentLoaded', () => {
    // Email Signup Form Validation
    const emailForms = document.querySelectorAll('.email-signup');

    emailForms.forEach(form => {
        form.addEventListener('submit', (event) => {
            const emailInput = form.querySelector('input[type="email"]');
            const emailValue = emailInput.value;

            if (!validateEmail(emailValue)) {
                event.preventDefault();
                alert('Please enter a valid email address.');
            }
        });
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Accordion Functionality for FAQ Section
    const accordionItems = document.querySelectorAll('.accordion input[type="radio"]');

    accordionItems.forEach(item => {
        item.addEventListener('change', (event) => {
            if (event.target.checked) {
                accordionItems.forEach(otherItem => {
                    if (otherItem !== event.target) {
                        otherItem.checked = false;
                    }
                });
            }
        });
    });


});