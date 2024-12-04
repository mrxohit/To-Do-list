let button = document.querySelector('button');
let two = document.querySelector('.two');
let btn = document.querySelector('.btn');
button.addEventListener('click', () => {
    var list = prompt("Whats About New");

    let input = document.createElement('input')
    input.type = 'checkbox';

    let li = document.createElement('p')
    li.innerHTML = `${list}`

    let hr = document.createElement('hr');

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => {
        two.removeChild(input);
        two.removeChild(deleteButton);
        two.removeChild(li);
        two.removeChild(hr)

    });

    li.style.fontSize = '30px';
    input.style.height = '20px';
    input.style.width = '30px';
    li.style.textAlign = 'center';
    li.style.wordWrap = 'break-word';
    deleteButton.classList.add('bt');
    hr.style.border = '1px solid black';

    if (list === "" || list === null) {
        alert("Tu kuch nhi kar sakta");
    } else {
        two.appendChild(input);
        two.appendChild(li);
        two.appendChild(deleteButton);
        two.appendChild(hr);
    }
});