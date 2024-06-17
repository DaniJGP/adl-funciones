function createDiv(color = 'white') {
    let newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    newDiv.style.height = '200px';
    newDiv.style.width = '200px';
    newDiv.style.background = color;
    newDiv.style.border = '1px solid black';
}

function colorDiv(color = 'white') {
    document.getElementById('key').style.background = color;
}

document.addEventListener('keydown', function (e) {
    const pressedKey = e.key.toLowerCase();
    if (pressedKey === 'a') {
        colorDiv('pink');
    } else if (pressedKey === 's') {
        colorDiv('orange');
    } else if (pressedKey === 'd') {
        colorDiv('skyblue');
    } else if (pressedKey === 'q') {
        createDiv('purple');
    } else if (pressedKey === 'w') {
        createDiv('gray');
    } else if (pressedKey === 'e') {
        createDiv('brown');
    }
});
