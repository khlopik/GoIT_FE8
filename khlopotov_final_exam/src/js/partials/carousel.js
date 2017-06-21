/*jshint esversion: 6 */
class Carousel {
	constructor(element) {
		this.carouselList = element.querySelector(`.carousel-list`);
		this.itemCount = element.querySelectorAll(`${element} li`);
		this.currentLeftShift = 0;
		this.shiftOffset = 175;
		this.minOffset = - ((this.itemCount - 4)*this.shiftOffset);
		this.maxOffset = 0;
	}

	next() {
		if (this.currentLeftShift != this.minOffset) {
			this.currentLeftShift -= this.shiftOffset;
			this.carouselList.style.left = this.currentLeftShift + 'px';
		}
	}

	previous() {
		if (this.currentLeftShift != this.maxOffset) {
			this.currentLeftShift += this.shiftOffset;
			this.carouselList.style.left = this.currentLeftShift + 'px';
		}
	}
}