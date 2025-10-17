const displayDateBtn = document.getElementById('displayDateBtn');
const dateContainer = document.getElementById('date-container');

displayDateBtn.addEventListener('click', () => {
    dateContainer.innerHTML = `<div>${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>`;
});