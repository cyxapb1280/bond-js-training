list.innerHTML = `<ul><li>One</li><li>Two</li></ul>`

list.innerHTML += `<li>Three</li>`

const li = document.createElement('li');
li.textContent = 'Three';

list.appendChild(li);

list.insertBefore(li, list.firstChild);