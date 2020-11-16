// Declaring Variables
const btn = document.querySelector('.button');
const hexValue = document.querySelector('.hexValue')
const hexArray = ['A', 'B', 'C', 'D', 'E','F', 1 , 2 , 3 , 4, 5, 6, 7 ,8 , 9, 0];
const body = document.querySelector('body'); 
// Event Listener
btn.addEventListener('click', changeColor);

function changeColor(){
	let h = '#';
	for(i = 0; i < 6; i++){
		const value = Math.floor(Math.random()*hexArray.length);
		h += hexArray[value];
	}
	body.style.backgroundColor = h;
	hexValue.innerHTML = h;
}

