document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('button');
    const input = document.querySelector('input[type="date"]');
    const msg = document.querySelector('.msg');

    button.addEventListener('click', () => {
        const dobValue = input.value;

        if (!dobValue) {
            msg.textContent = 'Please enter a valid date of birth.';
            return;
        }

        const dob = new Date(dobValue);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        if (isNaN(age)) {
            msg.textContent = 'Error calculating age. Please enter a valid date.';
        } else {
            msg.textContent = `Your age is ${age} years old`;
        }
    });
});

