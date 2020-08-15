let heading = document.querySelector('#heading1')
heading.addEventListener('mouseover', handelEvent);
function handelEvent() {
    let head = document.createElement('h1');
    head.textContent = 'This is created by event handler';
    document.querySelector('#heading1').after(head);
    heading.removeEventListener('mouseover', handelEvent)
}

let btn1 = document.querySelector('#button1');
let btn2 = document.querySelector('#button2');

btn1.addEventListener('click', handelButtonEvent)
btn2.addEventListener('click', handelButtonEvent)

function handelButtonEvent(event) {

    if (event.target.id == 'button1') {
        let para1 = document.createElement('p')
        para1.textContent = 'btn1 created this para'
        para1.style.color = 'maroon'
        document.querySelector("body").appendChild(para1)

    } else {

        let para2 = document.createElement('p')
        para2.textContent = 'btn2 created this para'
        para2.style.color = 'orange'
        document.querySelector("body").appendChild(para2)

    }

}