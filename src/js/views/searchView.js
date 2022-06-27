


class SearchView {
    _parentEl = document.querySelector('.search');
  
    getQuery() {
        const query =  this._parentEl.querySelector('.search__field').value;
        this._clearInput();
        return query;
    }

    _clearInput() {
        this._parentEl.querySelector('.search__field').value = '';
    }

    // this is the publisher
    // and the control search result function is the subscriber
    addHandlerSearch(handler) {
        this._parentEl.addEventListener('submit', function (e) {
            e.preventDefault();
            // this function should be the control search result function
            handler();
    })
    }

}

export default new SearchView(); 