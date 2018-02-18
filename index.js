const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  const query = {
    part: 'snippet',
    key: 'zPAKZ3PJcPKfd_WZy3Op4vTE',
    q: searchTerm,
  };
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

function displayYouTubeSearchData(data) {
  let results = data.items.map(function(item, index) {
    return renderResult(item);
  });
  $(".js-search-results").html(results);
}

function watchSubmit() {
  $(".js-search-form").submit(function(event) {
    event.preventDefault();
    let queryTarget = $(event.currentTarget).find(".js-query");
    let query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displayYouTubeSearchData);
    $("span").text("There are " + RESULT_HTML_TEMPLATE.length + " results.");
  });
}

$(watchSubmit);