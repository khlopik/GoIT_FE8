/*jshint esversion: 6 */

let ideas = new Ideas(document.getElementById('grid-item'));
let ideasGrid = document.querySelector('.grid');
let carouseLeft = new Flickity( '.carousel-left', {
		wrapAround: true,
		arrowShape: {
			x0: 10,
			x1: 60, y1: 50,
			x2: 65, y2: 50,
			x3: 15
		},
		draggable: false,
		accessibility: false
	});
let carouselCenter = new Flickity( '.carousel-center', {
		wrapAround: true,
		arrowShape: {
			x0: 10,
			x1: 60, y1: 50,
			x2: 65, y2: 50,
			x3: 15
		},
		draggable: false,
		accessibility: false,
		initialIndex: 1
	});
let carouselRight = new Flickity( '.carousel-right', {
		wrapAround: true,
		arrowShape: {
			x0: 10,
			x1: 60, y1: 50,
			x2: 65, y2: 50,
			x3: 15
		},
		draggable: false,
		accessibility: false,
		initialIndex: 2
	});
