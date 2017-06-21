/*jshint esversion: 6 */

class Ideas {
	constructor(template) {
		this.templateHTML = template.innerHTML;
		this.searchResult = [];
		this.accountID = '786488';
		this.ideas = document.createElement("div");
		this.ideas.classList.add('grid');
		this.ideasTitle = document.querySelector('.ideas__title');

		window.ideasInGlobal = this;
		this.scriptRequest.counter = 0;
		this.getAllData('*');
		this.searchInput = document.querySelector('.ideas__search-query');
		let self = this;
		document.querySelector('.ideas__search-partners')
			.addEventListener('click', function(event) {
				self.searchPartner();
				event.preventDefault();
				return false;
			});
	}

	generateHTML(template) {
		let htmlLodash = _.template(template);
		let lodash = htmlLodash({
			data: this.searchResult
		});
		return lodash;
	}

	render() {
		let oldGrid = document.querySelectorAll('.grid');
		this.ideas.innerHTML = this.generateHTML(this.templateHTML);
		if (oldGrid.length > 0) {
			this.ideas.parentNode.removeChild(oldGrid[0]);
		}
		this.insertAfter(this.ideas, this.ideasTitle);
		let masonryWidth = (document.body.clientWidth >= 768) ? 768 : 300;
		let masonry = new Masonry(this.ideas, {
	    	itemSelector: '.grid-item',
	    	columnWidth: masonryWidth
	    });
	}

	insertAfter(newNode, referenceNode) {
	    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	}

	clearData() {
		this.searchResult = [];
	}

	scriptRequest(url) {
		let prop = "loadJSONP" + this.scriptRequest.counter++;
	    let script = document.createElement('script');
	    let self = this;
	    function withCleanUp(r) {
	        return (x) => {
	            window[prop] = null;
	            document.head.removeChild(script);
	            r(x);
	        };
	    }

	    return new Promise((resolve, reject) => {
	        window[prop] = withCleanUp(resolve);
	        script.onerror = withCleanUp(reject);
	        // setTimeout(script.onerror, 5000); might be advisable

	        script.src = url + '&callback=' + prop;
	    	document.getElementsByTagName('head')[0].appendChild(script);
	    });
	}

	queryURL(query) {
		return `http://api.bigstockphoto.com/2/${this.accountID}/search/?q=${encodeURIComponent(query)}&response_detail=all`;
	}

	getAllData(queryString) {
		console.log('url', this.queryURL(queryString));
		this.scriptRequest(this.queryURL(queryString)).then(
			response => {
				// console.log('response', response);
				for (let i = 0; i<7; i++) {
					let randomID = Math.floor(Math.random()*49);
					this.searchResult.push({
						imageLink: response.data.images[randomID].preview.url,
						imageName: response.data.images[randomID].title || response.data.images[randomID].description || 'Something interesting'
					});
				}
				// console.log('this.searchResult', this.searchResult);
				this.render();
				this.scriptRequest.counter = 0;
				console.log('searchResults', response.data.images);
				this.searchResult = [];
			},
			error => {
				console.log('Something went wrong', error);
			}
		);
	}

	searchPartner(event) {
		// let searchQuery = this.searchInput.value;
		console.log('query string', this.searchInput.value);
		this.getAllData(this.searchInput.value);
		// event.preventDefault();
		// return false;
	}
}