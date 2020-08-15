document.querySelector('#inputId').addEventListener('change', function (e) {
    console.log(e.target.value);
})


// document.querySelector('#inputId').addEventListener('input', function (e) {
//     console.log(e.target.value);
// })


document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(e.target.elements.fname.value)
})