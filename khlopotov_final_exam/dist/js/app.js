"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();document.addEventListener("DOMContentLoaded",function(e){var t=function(){function e(t){_classCallCheck(this,e),this.templateHTML=t.innerHTML,this.searchResult=[],this.accountID="786488",this.ideas=document.createElement("div"),this.ideas.classList.add("grid"),this.ideasTitle=document.querySelector(".ideas__title"),window.ideasInGlobal=this,this.scriptRequest.counter=0,this.getAllData("*"),this.searchInput=document.querySelector(".ideas__search-query");var n=this;document.querySelector(".ideas__search-partners").addEventListener("click",function(e){return n.searchPartner(),e.preventDefault(),!1})}return _createClass(e,[{key:"generateHTML",value:function(e){return _.template(e)({data:this.searchResult})}},{key:"render",value:function(){var e=document.querySelectorAll(".grid");this.ideas.innerHTML=this.generateHTML(this.templateHTML),e.length>0&&this.ideas.parentNode.removeChild(e[0]),this.insertAfter(this.ideas,this.ideasTitle);var t=document.body.clientWidth>=768?768:300;new Masonry(this.ideas,{itemSelector:".grid-item",columnWidth:t})}},{key:"insertAfter",value:function(e,t){t.parentNode.insertBefore(e,t.nextSibling)}},{key:"clearData",value:function(){this.searchResult=[]}},{key:"scriptRequest",value:function(e){function t(e){return function(t){window[n]=null,document.head.removeChild(r),e(t)}}var n="loadJSONP"+this.scriptRequest.counter++,r=document.createElement("script");return new Promise(function(a,i){window[n]=t(a),r.onerror=t(i),r.src=e+"&callback="+n,document.getElementsByTagName("head")[0].appendChild(r)})}},{key:"queryURL",value:function(e){return"http://api.bigstockphoto.com/2/"+this.accountID+"/search/?q="+encodeURIComponent(e)+"&response_detail=all"}},{key:"getAllData",value:function(e){var t=this;console.log("url",this.queryURL(e)),this.scriptRequest(this.queryURL(e)).then(function(e){for(var n=0;n<7;n++){var r=Math.floor(49*Math.random());t.searchResult.push({imageLink:e.data.images[r].preview.url,imageName:e.data.images[r].title||e.data.images[r].description||"Something interesting"})}t.render(),t.scriptRequest.counter=0,console.log("searchResults",e.data.images),t.searchResult=[]},function(e){console.log("Something went wrong",e)})}},{key:"searchPartner",value:function(e){console.log("query string",this.searchInput.value),this.getAllData(this.searchInput.value)}}]),e}();new t(document.getElementById("grid-item")),document.querySelector(".grid"),new Flickity(".carousel-left",{wrapAround:!0,arrowShape:{x0:10,x1:60,y1:50,x2:65,y2:50,x3:15},draggable:!1,accessibility:!1}),new Flickity(".carousel-center",{wrapAround:!0,arrowShape:{x0:10,x1:60,y1:50,x2:65,y2:50,x3:15},draggable:!1,accessibility:!1,initialIndex:1}),new Flickity(".carousel-right",{wrapAround:!0,arrowShape:{x0:10,x1:60,y1:50,x2:65,y2:50,x3:15},draggable:!1,accessibility:!1,initialIndex:2})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIklkZWFzIiwidGVtcGxhdGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwiaW5uZXJIVE1MIiwic2VhcmNoUmVzdWx0IiwiYWNjb3VudElEIiwiaWRlYXMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaWRlYXNUaXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJpZGVhc0luR2xvYmFsIiwidGVtcGxhdGVIVE1MIiwiY291bnRlciIsInNlbGYiLCJzZWFyY2hQYXJ0bmVyIiwic2NyaXB0UmVxdWVzdCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZGF0YSIsIm9sZEdyaWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaHRtbExvZGFzaCIsImdlbmVyYXRlSFRNTCIsImxvZGFzaCIsInBhcmVudE5vZGUiLCJpbnNlcnRBZnRlciIsIm1hc29ucnlXaWR0aCIsImJvZHkiLCJjbGllbnRXaWR0aCIsIk1hc29ucnkiLCJpdGVtU2VsZWN0b3IiLCJjb2x1bW5XaWR0aCIsInJlZmVyZW5jZU5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXdOb2RlIiwibmV4dFNpYmxpbmciLCJ1cmwiLCJ4IiwicHJvcCIsImhlYWQiLCJyZW1vdmVDaGlsZCIsInNjcmlwdCIsInIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIndpdGhDbGVhblVwIiwib25lcnJvciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXBwZW5kQ2hpbGQiLCJxdWVyeSIsImVuY29kZVVSSUNvbXBvbmVudCIsInF1ZXJ5VVJMIiwicXVlcnlTdHJpbmciLCJ0aGVuIiwicmVzcG9uc2UiLCJyYW5kb21JRCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIl90aGlzIiwicHVzaCIsImltYWdlTGluayIsImltYWdlcyIsInByZXZpZXciLCJpbWFnZU5hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicmVuZGVyIiwiY29uc29sZSIsImxvZyIsInNlYXJjaElucHV0IiwiZ2V0QWxsRGF0YSIsImdldEVsZW1lbnRCeUlkIiwiRmxpY2tpdHkiLCJ3cmFwQXJvdW5kIiwiYXJyb3dTaGFwZSIsIngwIiwieDEiLCJ5MSIsIngzIiwiZHJhZ2dhYmxlIiwiYWNjZXNzaWJpbGl0eSIsIngyIiwiaWRlYXNHcmlkIiwieTIiLCJjYXJvdXNlbENlbnRlciJdLCJtYXBwaW5ncyI6IjRYQUFBQSxVQUFTQyxpQkFBaUIsbUJBQW9CLFNBQVNDLEdBQU8sR0FJdkRDLEdBSnVELFdBSzVELFFBQUFBLEdBQVlDLEdBQVVDLGdCQUFBQyxLQUFBSCxHQUx4QkgsS0FBQUEsYUFBU0MsRUFBaUJNLFVBQ3RCRCxLQUFBRSxnQkFDSEYsS0FBQUcsVUFBQSxTQU9FSCxLQUFLSSxNQUFRVixTQUFTVyxjQUFjLE9BVHVCTCxLQUl2REgsTUFKdURTLFVBQUFDLElBQUEsUUFLNURQLEtBQUFRLFdBQVlWLFNBQVVXLGNBQUEsaUJBUXJCQyxPQUFPQyxjQUFnQlgsS0FQdkJBLEtBQUtZLGNBQUxDLFFBQTZCWixFQUM3QkQsS0FBS0UsV0FBQUEsS0FDTEYsS0FBS0csWUFBWVQsU0FBakJlLGNBQUEsdUJBQ0EsSUFBQUssR0FBQWQsSUFDQU4sVUFBS1UsY0FBZ0JHLDJCQUNyQlosaUJBQWtCRCxRQUFTZSxTQUFBQSxHQUczQixNQU1FSyxHQUFLQyxnQkFQUEwsRUFBT0Msa0JBQ0ZLLElBZHNELE1BQUFDLGNBQUFwQixJQUFBcUIsSUFBQSxlQUFBQyxNQUFBLFNBa0JsRFYsR0FNVCxNQUpPTSxHQUFMakIsU0FBQUEsSUFFQXNCLEtBQUFwQixLQUFPRSxrQkF0QmtEZ0IsSUFBQSxTQUFBQyxNQUFBLFdBQUEsR0FBQUUsR0FBQTNCLFNBQUE0QixpQkEwQnJDLFFBQ3RCdEIsTUFBSXVCLE1BQUFBLFVBQWV6QixLQUFGMEIsYUFBakJ4QixLQUFBWSxjQUNBUyxFQUFJSSxPQUFTRixHQUNaSCxLQUFBQSxNQUFNTSxXQUFLeEIsWUFB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dXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cdC8qanNoaW50IGVzdmVyc2lvbjogNiAqL1xuXHRcblx0Y2xhc3MgSWRlYXMge1xuXHRcdGNvbnN0cnVjdG9yKHRlbXBsYXRlKSB7XG5cdFx0XHR0aGlzLnRlbXBsYXRlSFRNTCA9IHRlbXBsYXRlLmlubmVySFRNTDtcblx0XHRcdHRoaXMuc2VhcmNoUmVzdWx0ID0gW107XG5cdFx0XHR0aGlzLmFjY291bnRJRCA9ICc3ODY0ODgnO1xuXHRcdFx0dGhpcy5pZGVhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHR0aGlzLmlkZWFzLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcblx0XHRcdHRoaXMuaWRlYXNUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pZGVhc19fdGl0bGUnKTtcblx0XG5cdFx0XHR3aW5kb3cuaWRlYXNJbkdsb2JhbCA9IHRoaXM7XG5cdFx0XHR0aGlzLnNjcmlwdFJlcXVlc3QuY291bnRlciA9IDA7XG5cdFx0XHR0aGlzLmdldEFsbERhdGEoJyonKTtcblx0XHRcdHRoaXMuc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWRlYXNfX3NlYXJjaC1xdWVyeScpO1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlkZWFzX19zZWFyY2gtcGFydG5lcnMnKVxuXHRcdFx0XHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRcdHNlbGYuc2VhcmNoUGFydG5lcigpO1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdFxuXHRcdGdlbmVyYXRlSFRNTCh0ZW1wbGF0ZSkge1xuXHRcdFx0bGV0IGh0bWxMb2Rhc2ggPSBfLnRlbXBsYXRlKHRlbXBsYXRlKTtcblx0XHRcdGxldCBsb2Rhc2ggPSBodG1sTG9kYXNoKHtcblx0XHRcdFx0ZGF0YTogdGhpcy5zZWFyY2hSZXN1bHRcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGxvZGFzaDtcblx0XHR9XG5cdFxuXHRcdHJlbmRlcigpIHtcblx0XHRcdGxldCBvbGRHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQnKTtcblx0XHRcdHRoaXMuaWRlYXMuaW5uZXJIVE1MID0gdGhpcy5nZW5lcmF0ZUhUTUwodGhpcy50ZW1wbGF0ZUhUTUwpO1xuXHRcdFx0aWYgKG9sZEdyaWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0aGlzLmlkZWFzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob2xkR3JpZFswXSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmluc2VydEFmdGVyKHRoaXMuaWRlYXMsIHRoaXMuaWRlYXNUaXRsZSk7XG5cdFx0XHRsZXQgbWFzb25yeVdpZHRoID0gKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPj0gNzY4KSA/IDc2OCA6IDMwMDtcblx0XHRcdGxldCBtYXNvbnJ5ID0gbmV3IE1hc29ucnkodGhpcy5pZGVhcywge1xuXHRcdCAgICBcdGl0ZW1TZWxlY3RvcjogJy5ncmlkLWl0ZW0nLFxuXHRcdCAgICBcdGNvbHVtbldpZHRoOiBtYXNvbnJ5V2lkdGhcblx0XHQgICAgfSk7XG5cdFx0fVxuXHRcblx0XHRpbnNlcnRBZnRlcihuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XG5cdFx0ICAgIHJlZmVyZW5jZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZS5uZXh0U2libGluZyk7XG5cdFx0fVxuXHRcblx0XHRjbGVhckRhdGEoKSB7XG5cdFx0XHR0aGlzLnNlYXJjaFJlc3VsdCA9IFtdO1xuXHRcdH1cblx0XG5cdFx0c2NyaXB0UmVxdWVzdCh1cmwpIHtcblx0XHRcdGxldCBwcm9wID0gXCJsb2FkSlNPTlBcIiArIHRoaXMuc2NyaXB0UmVxdWVzdC5jb3VudGVyKys7XG5cdFx0ICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHQgICAgbGV0IHNlbGYgPSB0aGlzO1xuXHRcdCAgICBmdW5jdGlvbiB3aXRoQ2xlYW5VcChyKSB7XG5cdFx0ICAgICAgICByZXR1cm4gKHgpID0+IHtcblx0XHQgICAgICAgICAgICB3aW5kb3dbcHJvcF0gPSBudWxsO1xuXHRcdCAgICAgICAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHQgICAgICAgICAgICByKHgpO1xuXHRcdCAgICAgICAgfTtcblx0XHQgICAgfVxuXHRcblx0XHQgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHQgICAgICAgIHdpbmRvd1twcm9wXSA9IHdpdGhDbGVhblVwKHJlc29sdmUpO1xuXHRcdCAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSB3aXRoQ2xlYW5VcChyZWplY3QpO1xuXHRcdCAgICAgICAgLy8gc2V0VGltZW91dChzY3JpcHQub25lcnJvciwgNTAwMCk7IG1pZ2h0IGJlIGFkdmlzYWJsZVxuXHRcblx0XHQgICAgICAgIHNjcmlwdC5zcmMgPSB1cmwgKyAnJmNhbGxiYWNrPScgKyBwcm9wO1xuXHRcdCAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblx0XHQgICAgfSk7XG5cdFx0fVxuXHRcblx0XHRxdWVyeVVSTChxdWVyeSkge1xuXHRcdFx0cmV0dXJuIGBodHRwOi8vYXBpLmJpZ3N0b2NrcGhvdG8uY29tLzIvJHt0aGlzLmFjY291bnRJRH0vc2VhcmNoLz9xPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KX0mcmVzcG9uc2VfZGV0YWlsPWFsbGA7XG5cdFx0fVxuXHRcblx0XHRnZXRBbGxEYXRhKHF1ZXJ5U3RyaW5nKSB7XG5cdFx0XHRjb25zb2xlLmxvZygndXJsJywgdGhpcy5xdWVyeVVSTChxdWVyeVN0cmluZykpO1xuXHRcdFx0dGhpcy5zY3JpcHRSZXF1ZXN0KHRoaXMucXVlcnlVUkwocXVlcnlTdHJpbmcpKS50aGVuKFxuXHRcdFx0XHRyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpPDc7IGkrKykge1xuXHRcdFx0XHRcdFx0bGV0IHJhbmRvbUlEID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjQ5KTtcblx0XHRcdFx0XHRcdHRoaXMuc2VhcmNoUmVzdWx0LnB1c2goe1xuXHRcdFx0XHRcdFx0XHRpbWFnZUxpbms6IHJlc3BvbnNlLmRhdGEuaW1hZ2VzW3JhbmRvbUlEXS5wcmV2aWV3LnVybCxcblx0XHRcdFx0XHRcdFx0aW1hZ2VOYW1lOiByZXNwb25zZS5kYXRhLmltYWdlc1tyYW5kb21JRF0udGl0bGUgfHwgcmVzcG9uc2UuZGF0YS5pbWFnZXNbcmFuZG9tSURdLmRlc2NyaXB0aW9uIHx8ICdTb21ldGhpbmcgaW50ZXJlc3RpbmcnXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3RoaXMuc2VhcmNoUmVzdWx0JywgdGhpcy5zZWFyY2hSZXN1bHQpO1xuXHRcdFx0XHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0XHRcdFx0dGhpcy5zY3JpcHRSZXF1ZXN0LmNvdW50ZXIgPSAwO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdzZWFyY2hSZXN1bHRzJywgcmVzcG9uc2UuZGF0YS5pbWFnZXMpO1xuXHRcdFx0XHRcdHRoaXMuc2VhcmNoUmVzdWx0ID0gW107XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnU29tZXRoaW5nIHdlbnQgd3JvbmcnLCBlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcblx0XHRzZWFyY2hQYXJ0bmVyKGV2ZW50KSB7XG5cdFx0XHQvLyBsZXQgc2VhcmNoUXVlcnkgPSB0aGlzLnNlYXJjaElucHV0LnZhbHVlO1xuXHRcdFx0Y29uc29sZS5sb2coJ3F1ZXJ5IHN0cmluZycsIHRoaXMuc2VhcmNoSW5wdXQudmFsdWUpO1xuXHRcdFx0dGhpcy5nZXRBbGxEYXRhKHRoaXMuc2VhcmNoSW5wdXQudmFsdWUpO1xuXHRcdFx0Ly8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdC8vIHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0Lypqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5cdFxuXHRsZXQgaWRlYXMgPSBuZXcgSWRlYXMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyaWQtaXRlbScpKTtcblx0bGV0IGlkZWFzR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyk7XG5cdGxldCBjYXJvdXNlTGVmdCA9IG5ldyBGbGlja2l0eSggJy5jYXJvdXNlbC1sZWZ0Jywge1xuXHRcdFx0d3JhcEFyb3VuZDogdHJ1ZSxcblx0XHRcdGFycm93U2hhcGU6IHtcblx0XHRcdFx0eDA6IDEwLFxuXHRcdFx0XHR4MTogNjAsIHkxOiA1MCxcblx0XHRcdFx0eDI6IDY1LCB5MjogNTAsXG5cdFx0XHRcdHgzOiAxNVxuXHRcdFx0fSxcblx0XHRcdGRyYWdnYWJsZTogZmFsc2UsXG5cdFx0XHRhY2Nlc3NpYmlsaXR5OiBmYWxzZVxuXHRcdH0pO1xuXHRsZXQgY2Fyb3VzZWxDZW50ZXIgPSBuZXcgRmxpY2tpdHkoICcuY2Fyb3VzZWwtY2VudGVyJywge1xuXHRcdFx0d3JhcEFyb3VuZDogdHJ1ZSxcblx0XHRcdGFycm93U2hhcGU6IHtcblx0XHRcdFx0eDA6IDEwLFxuXHRcdFx0XHR4MTogNjAsIHkxOiA1MCxcblx0XHRcdFx0eDI6IDY1LCB5MjogNTAsXG5cdFx0XHRcdHgzOiAxNVxuXHRcdFx0fSxcblx0XHRcdGRyYWdnYWJsZTogZmFsc2UsXG5cdFx0XHRhY2Nlc3NpYmlsaXR5OiBmYWxzZSxcblx0XHRcdGluaXRpYWxJbmRleDogMVxuXHRcdH0pO1xuXHRsZXQgY2Fyb3VzZWxSaWdodCA9IG5ldyBGbGlja2l0eSggJy5jYXJvdXNlbC1yaWdodCcsIHtcblx0XHRcdHdyYXBBcm91bmQ6IHRydWUsXG5cdFx0XHRhcnJvd1NoYXBlOiB7XG5cdFx0XHRcdHgwOiAxMCxcblx0XHRcdFx0eDE6IDYwLCB5MTogNTAsXG5cdFx0XHRcdHgyOiA2NSwgeTI6IDUwLFxuXHRcdFx0XHR4MzogMTVcblx0XHRcdH0sXG5cdFx0XHRkcmFnZ2FibGU6IGZhbHNlLFxuXHRcdFx0YWNjZXNzaWJpbGl0eTogZmFsc2UsXG5cdFx0XHRpbml0aWFsSW5kZXg6IDJcblx0XHR9KTtcbn0pOyJdfQ==
