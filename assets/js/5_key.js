function createDiv(color = 'white') {
    let newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    newDiv.style.height = '200px';
    newDiv.style.width = '200px';
    newDiv.style.background = color;
    newDiv.style.border = '1px solid black';
}

function colorDiv(element, color = 'white') {
    element.style.background = color;
}

let divColor = '';
const keyDiv = document.getElementById('key');

document.addEventListener('keydown', (e) => {
    const pressedKey = e.key.toLowerCase();
    if (pressedKey === 'a') {
        divColor = 'pink';
        colorDiv(keyDiv, divColor);
    } else if (pressedKey === 's') {
        divColor = 'orange';
        colorDiv(keyDiv, divColor);
    } else if (pressedKey === 'd') {
        divColor = 'skyblue';
        colorDiv(keyDiv, divColor);
    } else if (pressedKey === 'q') {
        createDiv('purple');
    } else if (pressedKey === 'w') {
        createDiv('gray');
    } else if (pressedKey === 'e') {
        createDiv('brown');
    }
});
