document.querySelector('#myForm').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(e.target.elements.firstName.value);
    console.log(e.target.elements.email.checked);

    if (e.target.elements.email.checked) {
        console.log('the email box is checked');
    } else {
        console.log('the email box is NOT checked');
    }

    console.log(e.target.elements.cities.value);
})