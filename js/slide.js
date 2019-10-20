// --------------------------------- slide show
var slideIndex = 1;
showSlide(slideIndex);

console.log(slideIndex);

function slide(n) {
	showSlide(slideIndex += n);
}

function showSlide(n) {
	var i;
	var el = document.getElementsByClassName('slide');
	console.log(el);
	// .length means the element exists in the DOM
	if(el.length){
		if (n > el.length)
			slideIndex = 1;
		if (n < 1)
			slideIndex = el.length;
		for (i = 0; i < el.length; i++)
			el[i].style.display = 'none';
		el[slideIndex-1].style.display = 'block';
	}else{
		return;
	}
}