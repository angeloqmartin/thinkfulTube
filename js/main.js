const $searchBtn = $('<button type="submit" role="search" id="search-btn"><img src="img/searchIcon.png" alt="a magnifying glass search icon"></button>');
const $searchTerm = $('#search-bar').val(); 
//// const $searchTerm = $('#search-bar').val() => returns blank

$('.searchContainer').append($searchBtn); // places search button on page

// get youtube API data
function getAPIdata () {
    $.ajax({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        // dataType: JSON,
        data: {
            key: 'AIzaSyCkbdTrRPuT_qdEr0tkgLq4Z6Trlvxp4UA',
            part: 'snippet',
            q: $('#search-bar').val(),
            maxResults: 9
        }, // end data
        success: function (data) {
            results(data);
        } // end success
    }); // end ajax
}; // end getAPIdata

// handels the search submission 
function watchSubmit() {
    $('.search-form').submit(function (event) {
        event.preventDefault();
        getAPIdata();
    });
};

// renders search results
function results(data) {
    $.each(data.items, function (i, obj) {
        $('.grid-container').append(`
            <img class="grid-items" src="${obj.snippet.thumbnails.high.url}" alt="thumbnail image of searched results">`)
    })
}


watchSubmit();