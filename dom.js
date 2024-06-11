const mainTitle = document.querySelector('#title');
const mainText = document.querySelector('#mainSlogan');
const mainButton = document.querySelector('#mainButton');
const mainInput = document.querySelector('#mainInput');

mainButton.addEventListener('click', (event) => {
  generateText(mainText);
  generateButton(mainButton);
  generateTitle(mainTitle);
});

mainInput.addEventListener('change', (event) => {
  generateNewInput(event.target.value);
});

function generateText (mainText) {
  mainText.textContent = 'You learned DOM manipulation!';
}

function generateButton (mainButton) {
  mainButton.style.backgroundColor = '#DAA4A3';
  mainButton.style.border = '1px solid purple';
}

function generateTitle (mainTitle) {
  mainTitle.style.color = 'purple';
}

function generateNewInput () {
  const userInput = document.createElement('h5');
  userInput.textContent = mainInput.value;
  document.body.appendChild(userInput);
}