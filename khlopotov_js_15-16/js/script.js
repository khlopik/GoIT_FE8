'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
	let searchEngine = {
		apiString: 'http://webhose.io/search?',
		webhoseToken: 'a2462960-3a8d-4a5d-ad80-4331606b75e4',

		getResults(searchQuery) {
			let self = this;
			let webhoseResult = new XMLHttpRequest();
			webhoseResult.open('GET', `${this.apiString}token=${this.webhoseToken}&format=json&size=10&q=${encodeURI(searchQuery)}`, true);
			webhoseResult.send();

			webhoseResult.onreadystatechange = function(event) {
				if (this.readyState != 4) return;

				if (this.status != 200) {
					console.error('ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
					return;
				};

				let result = JSON.parse(this.responseText);

				let template = document.querySelector('#generate-result');

				let html = template.innerHTML;
				let content = document.createElement('div');
				content.classList.add('content');
				let htmlLodash = _.template(html);
				let lodash = htmlLodash({
				  	data: result
				});
				content.innerHTML = lodash;

				let wrapper = document.querySelector('.wrapper');
				self.clearResults();
				wrapper.appendChild(content);
			};
		},

		clearResults() {
			let elem = document.querySelector('.content');
			if (elem === null) {
				return;
			};
			elem.parentNode.removeChild(elem);
		}
	};

	let searchField = document.querySelector('.header__search-field');
	let submitButton = document.querySelector('.header__search-button');
	submitButton.addEventListener('click', (event) => {
		searchEngine.getResults(searchField.value);
		// console.log('searchField.value', searchField.value)
		event.preventDefault();
		return false;
		
	})
});