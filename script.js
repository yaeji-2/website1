const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = document.querySelector('#name').value;
	localStorage.setItem('recentUser', name);
	form.reset();
	window.location.href = 'main.html';
});
