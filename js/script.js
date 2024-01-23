"use strict"

let burgerButton = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');

function toggleActiveClass() {
	burgerButton.classList.toggle('active');
	menu.classList.toggle('active');
}

burgerButton.addEventListener('click', toggleActiveClass);


let menuItems = document.querySelectorAll('.content__menu-item');

function handleMenuItemClick(event) {
	let clickedItem = event.currentTarget;

	clickedItem.classList.toggle('active');
}

menuItems.forEach(function (item) {
	item.addEventListener('click', handleMenuItemClick);
});



let searchButton = document.querySelector('.search__button');
let searchBody = document.querySelector('.search__body');

function handleSearchButtonClick() {
	searchBody.classList.toggle('open');
}

searchButton.addEventListener('click', handleSearchButtonClick);


function scrollToElement(elementId) {
	let targetElement = document.getElementById(elementId);

	if (targetElement) {

		let headerHeight = 80;

		let targetPosition = targetElement.offsetTop - headerHeight;

		window.scrollTo({
			top: targetPosition,
			behavior: 'smooth'
		});
	}
}

document.getElementById('block-one').addEventListener('click', function () {
	scrollToElement('block-01');
});
document.getElementById('block-two').addEventListener('click', function () {
	scrollToElement('block-02');
});
document.getElementById('block-three').addEventListener('click', function () {
	scrollToElement('block-03');
});
document.getElementById('block-four').addEventListener('click', function () {
	scrollToElement('block-04');
});
document.getElementById('block-five').addEventListener('click', function () {
	scrollToElement('block-05');
});
document.getElementById('block-six').addEventListener('click', function () {
	scrollToElement('block-06');
});
document.getElementById('block-seven').addEventListener('click', function () {
	scrollToElement('block-07');
});
document.getElementById('block-eight').addEventListener('click', function () {
	scrollToElement('block-08');
});
document.getElementById('block-nine').addEventListener('click', function () {
	scrollToElement('block-09');
});
document.getElementById('block-ten').addEventListener('click', function () {
	scrollToElement('block-10');
});
