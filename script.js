const form = document.querySelector('form');
const greeting = document.querySelector('#greeting');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = document.querySelector('#name').value;
	localStorage.setItem('recentUser', name);
	const name = document.querySelector('#name').value;
	greeting.textContent = `Welcome, ${name}!`;
	form.reset();
	window.location.href = 'main.html';
});
