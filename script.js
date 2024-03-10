// Selecting elements using getElementById
const paragraph1 = document.getElementById('paragraph1');
paragraph1.textContent = 'This paragraph is selected using getElementById.';
paragraph1.style.color = 'blue';

// Selecting elements using querySelectorAll
const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
    item.textContent += ' (Selected using querySelectorAll)';
    item.classList.add('highlight');
});

// Selecting the first paragraph element using querySelector
const firstParagraph = document.querySelector('p');
firstParagraph.textContent += ' (Selected using querySelector)';