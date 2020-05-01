const submit = document.querySelector('#submit');
const upper = document.querySelector('#upper');
const lower = document.querySelector('#lower');
const memeImg = document.querySelector('#image');

submit.addEventListener('click', function(e) {
	e.preventDefault();
	let newDiv = document.createElement('div');
	let img = document.createElement('img');
	let upperValue = upper.value;
	let lowerValue = lower.value;
	let upText = document.createElement('div');
	let downText = document.createElement('div');
	let btn = document.createElement('button');
	newDiv.classList.add('container');
	btn.textContent = 'Remove Meme';
	btn.addEventListener('click', function(e) {
		e.target.parentElement.remove();
	});
	upText.classList.add('upper');
	downText.classList.add('lower');
	upText.textContent = upperValue;
	downText.textContent = lowerValue;
	newDiv.appendChild(upText);
	newDiv.appendChild(downText);
	newDiv.appendChild(btn);
	img.setAttribute('src', memeImg.value);
	img.setAttribute('width', '350px');
	img.setAttribute('height', '200px');
	newDiv.appendChild(img);
	document.body.appendChild(newDiv);
	upper.value = '';
	lower.value = '';
	memeImg.value = '';
});
