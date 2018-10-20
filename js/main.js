const $searchBtn = $('<button type="submit" role="search" id="search-btn"><img src="img/searchIcon.png" alt="a magnifying glass search icon"></button>');
const $searchTerm = $('#search-bar').val();

$('.searchContainer').append($searchBtn); // places search button on page

// get youtube API data
function getAPIdata () {
    $.ajax({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            part: 'snippet',
            key: 'AIzaSyCkbdTrRPuT_qdEr0tkgLq4Z6Trlvxp4UA',
            q: $searchTerm,
            success: function(){
                console.log('fetehed API data');
            } // end success function

        } // end data
    }); // end ajax
}; // end getAPIdata