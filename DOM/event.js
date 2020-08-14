let btn = document.querySelector('button');


btn.addEventListener('click', handelEvent)


function handelEvent() {
    let p1 = document.createElement('p');
    p1.textContent = 'The button was clicked';
    document.querySelector('body').appendChild(p1);
    p1.style.backgroundColor = 'grey'

    let p2 = document.createElement('button')
    p2.innerHTML = '2ndBtn'
    document.body.appendChild(p2)
    p2.addEventListener('click', handelEvent);

}