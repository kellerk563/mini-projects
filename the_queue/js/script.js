const queueInput = document.getElementById('add-queue');
const addBtn = document.getElementById('add-item');
const queueList = document.getElementById('queue-list');

function addItem() {
	if (queueInput.value === '') {
		alert('No item to add.');
	} else {
		let li = document.createElement('li');
		// li.innerHTML = queueInput.value;
		let span = document.createElement('span');
		li.appendChild(span);
		span.textContent = queueInput.value;
		queueList.appendChild(li);

		let button = document.createElement('button');
		button.classList.add('delete-btn');
		button.innerHTML = '<span class=\'sr-only\'>Delete item</span>';
		li.appendChild(button);
	}
	queueInput.value = ''; // clear out input after adding it to list
	saveQueue();
}

addBtn.addEventListener('click', addItem);

// like the above but everything in the event listener
queueList.addEventListener('click', function(e) {
	if (e.target.tagName === 'LI') {
		e.target.classList.toggle('selected');
		saveQueue();
	} else if (e.target.tagName === 'SPAN') {
		e.target.parentElement.classList.toggle('selected');
	} else if (e.target.tagName === 'BUTTON') {
		e.target.parentElement.remove();
		saveQueue();
	}
});

// what does false do?

// storing in browser
function saveQueue() {
	localStorage.setItem('data', queueList.innerHTML);
}
function displayQueue() {
	queueList.innerHTML = localStorage.getItem('data');
}
displayQueue();