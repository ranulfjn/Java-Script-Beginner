let selector = document.querySelectorAll('p');
selector.forEach(function (para) {
    if (para.textContent.includes('Second')) {
        para.style.color = 'red'
    }
})